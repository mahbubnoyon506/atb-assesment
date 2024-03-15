"use client";

import React from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";

import Button from "@/components/shared/Button";
import DefaultLayout from "@/components/DefaultLayout";
import InputField from "@/components/forms/InputField";

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
    <DefaultLayout>
      <div className="min-h-screen flex justify-center items-center bg-slate-100">
        <div className="bg-white shadow-md p-5 rounded-md">
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
            <div className="">
              <Button type="submit" variant="sky">
                Register
              </Button>
              <p>
                Already have an account?{" "}
                <Link className="text-sky-600 underline" href="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Register;
