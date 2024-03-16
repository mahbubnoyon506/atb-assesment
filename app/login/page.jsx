"use client";

import Link from "next/link";
import React, { useState } from "react";

import { useForm } from "react-hook-form";

import DefaultLayout from "@/components/DefaultLayout";
import InputField from "@/components/forms/InputField";
import Button from "@/components/shared/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [error, setError] = useState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await signIn("credentials", {
        email_or_phone: data.email_or_phone,
        password: data.password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
      }
      console.log(res);
      if (res.ok) {
        router.replace("profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DefaultLayout>
      <div className="bg-slate-100 min-h-screen flex justify-center items-center">
        <div className=" bg-white shadow-md p-5 rounded-md">
          <p className="text-2xl font-semibold py-4">Sign In</p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Email or Phone"
              type="text"
              placeholder="Type email or prone"
              fieldName="email_or_phone"
              register={register}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Type password"
              fieldName="password"
              register={register}
            />
            {error ? (
              <div className=" rounded-md outline outline-1 outline-red-600 text-red-600 px-3 py-1">
                {error}
              </div>
            ) : null}

            <div className="">
              <Button type="submit" variant="sky">
                Login
              </Button>
              <p>
                Don&apos;t have an account?{" "}
                <Link className="text-sky-600 underline" href="/register">
                  Create an account
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Login;
