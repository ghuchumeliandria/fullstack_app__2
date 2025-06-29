"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/store/userStore";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema, SignInType } from "@/app/validation/sign-in.schema";
import { axiosInstance } from "@/app/api/axios.instance";
import { setCookie } from "cookies-next";
export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema)
  })

  const handleLogin = async ({ email, password }: SignInType) => {
    try {
      const resp = await axiosInstance.post('/auth/sign-in', {
        email,
        password
      })

      if (resp.status === 201) {
        console.log("warmatebit daloginda")
        setCookie('token', resp.data.token, { maxAge: 1 * 60 })
        router.push("/");
        return
      }
    } catch (error) {

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-3">

          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <input
          {...register('password')}
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-medium"
          >
            Log In
          </button>
        </form>
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
