"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/store/userStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema, SignInType } from "@/app/validation/sign-in.schema";
import { axiosInstance } from "@/app/api/axios.instance";

export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: yupResolver(signInSchema),
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (data: SignInType) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/auth/sign-in", data);

      if (res.status === 200 || res.status === 201) {
        setTimeout(() => {
          router.replace("/");
        }, 0);
      }
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-3"
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <button
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-medium"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
