"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";

import Button from "@/components/shared/Button";
import DefaultLayout from "@/components/DefaultLayout";
import InputField from "@/components/forms/InputField";
import { useRouter } from "next/navigation";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsLoading(false);
        reset();
        router.push("/");
      } else {
        setError("User registration failed.");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
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
                  required="First name is required"
                  errors={errors?.first_name?.message}
                />
              </div>
              <div className=" w-full">
                <InputField
                  label="Last name"
                  type="text"
                  placeholder="Type last name"
                  register={register}
                  fieldName="last_name"
                  required="Last name is required"
                  errors={errors?.last_name?.message}
                />
              </div>
            </div>
            <InputField
              label="Email or Phone"
              type="text"
              placeholder="Type email or prone"
              register={register}
              fieldName="email_or_phone"
              required="Email or Phone is required"
              errors={errors?.email_or_phone?.message}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Type password"
              register={register}
              fieldName="password"
              required="Password is required"
              errors={errors?.password?.message}
            />
            {error ? (
              <div className=" w-auto rounded-md outline outline-1 outline-red-600 text-red-600 px-3 py-1">
                {error}
              </div>
            ) : null}
            <div className="">
              <Button isLoading={isLoading} type="submit" variant="sky">
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
