"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleImage = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!name || !email || !password || !image)
      return setError("All fields are required");

    const newUser = { name, email, password, image };
    localStorage.setItem("user", JSON.stringify(newUser));
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
        />
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
        <input
          type="file"
          onChange={handleImage}
          className="w-full file:bg-blue-600 file:text-white file:rounded file:px-4 file:py-1 border border-gray-600 bg-zinc-800"
        />
        {image && (
          <img src={image} className="w-20 h-20 rounded-full mx-auto" />
        )}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded font-medium"
        >
          Register
        </button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
