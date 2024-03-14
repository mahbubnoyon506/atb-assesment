"use client";

import InputField from "@/components/forms/InputField";
import Button from "@/components/shared/Button";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("onSubmit", data);
  };
  return (
    <div className="max-w-2xl mx-auto">
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
        <div className="flex justify-between items-end">
          <p>
            Don&apos;t have an account?{" "}
            <Link className="text-sky-600 underline" href="/register">
              Create an account
            </Link>{" "}
          </p>
          <Button type="submit" variant="sky">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
