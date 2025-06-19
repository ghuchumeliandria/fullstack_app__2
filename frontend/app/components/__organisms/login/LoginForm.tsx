"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/store/userStore";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setUser } = useUserStore();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const user = JSON.parse(stored);
      if (user?.email && user?.password) return;
      else localStorage.removeItem("user");
    }
  }, []);

  const handleLogin = () => {
    const stored = localStorage.getItem("user");
    if (!email || !password) return setError("Please enter all fields");
    if (!stored) return setError("No user found. Please register.");

    const user = JSON.parse(stored);
    if (user.email !== email) return setError("Email does not match");
    if (user.password !== password) return setError("Password is incorrect");

    setUser(user);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-medium"
        >
          Log In
        </button>
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
