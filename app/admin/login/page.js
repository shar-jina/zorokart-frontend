"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // backend will validate admin
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) throw new Error("Login failed");
            const data = await res.json();

            // Save token (or flag)
            localStorage.setItem("adminToken", data.token || "logged-in");

            window.dispatchEvent(new Event("admin-auth-change"));

            router.push("/admin/dashboard");
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-20 px-6">
            <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                <header style={{ marginBottom: "2rem", textAlign: "center" }}>
                    <h1 className="text-3xl font-bold text-brand-green mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Admin Login</h1>
                    <p className="text-slate-500 text-sm">Access the zorokart administration dashboard.</p>
                </header>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6" style={{ border: 'none', boxShadow: 'none', padding: 0 }}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-green outline-none transition-all"
                            placeholder="admin@zorokart.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" title="Enter your password" rural-icon="lock" className="text-sm font-semibold text-slate-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-green outline-none transition-all"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full bg-brand-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-md mt-4"
                        style={{ backgroundColor: '#42A147' }}
                    >
                        {loading ? "Logging in..." : "Login to Dashboard"}
                    </button>
                </form>
            </div>
        </main>
    );
}
