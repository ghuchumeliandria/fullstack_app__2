"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema, SignUpType } from "@/app/validation/sign-up.schema";
import { axiosInstance } from "@/app/api/axios.instance";

export default function RegisterForm() {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })

  const onSubmit = async ({ fullName, email, password }: SignUpType) => {
    try {
      const resp = await axiosInstance.post('/auth/sign-up', {
        fullName,
        email,
        password
      })
      if (resp.status === 201) {
        router.push('/login')
        return
      }

    } catch (error: any) {
      if (error.response?.data?.message === 'user already exist') {
        setError("email", {
          type: "manual",
          message: "Email already exists",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <input
            {...register('fullName')}
            type="text"
            id="fullName"
            placeholder="fullname"
            required
            className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
          <input
            {...register('email')}
            id="email"
            type="email"
            placeholder="email"
            required
            className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <input
            {...register('password')}
            id="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded font-medium"
          >
            Register
          </button>
        </form>
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

