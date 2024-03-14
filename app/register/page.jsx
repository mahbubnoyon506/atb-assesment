"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/InputField";
import Button from "@/components/shared/Button";
import Link from "next/link";

function Register() {
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
      <p className="text-2xl font-semibold py-4">Create an account</p>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4">
          <div className="w-full">
            <InputField
              label="First name"
              type="text"
              placeholder="Type first name"
              register={register}
              fieldName="first_name"
            />
          </div>
          <div className=" w-full">
            <InputField
              label="Last name"
              type="text"
              placeholder="Type last name"
              register={register}
              fieldName="last_name"
            />
          </div>
        </div>
        <InputField
          label="Email or Phone"
          type="text"
          placeholder="Type email or prone"
          register={register}
          fieldName="email_or_phone"
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Type password"
          register={register}
          fieldName="password"
        />
        <div className="flex justify-between items-end">
          <p>
            Already have an account?{" "}
            <Link className="text-sky-600 underline" href="/login">
              Login
            </Link>{" "}
          </p>
          <Button type="submit" variant="sky">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
