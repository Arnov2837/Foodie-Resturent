"use client";

import Link from "next/link";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Signin = () => {
  const onSubmit =async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);


    const { data, error } = await authClient.signIn.email({
    email:userData.email, // required
    password:userData.password, // required
    rememberMe: true,
    callbackURL: "/dasbord",
});



  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
            <Check className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-300">
            Sign in to your account
          </p>
        </div>

        <Form
          className="flex w-full flex-col gap-5"
          onSubmit={onSubmit}
        >
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="mb-2 text-sm font-medium text-gray-200">
              Email
            </Label>

            <Input
              placeholder="Enter Your Email"
              className="rounded-xl border-white/10 bg-white/10 text-white placeholder:text-gray-400"
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
          >
            <Label className="mb-2 text-sm font-medium text-gray-200">
              Password
            </Label>

            <Input
              placeholder="Enter your password"
              className="rounded-xl border-white/10 bg-white/10 text-white placeholder:text-gray-400"
            />

            <Description className="mt-2 text-xs text-gray-400">
              Enter your account password
            </Description>

            <FieldError />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-2 h-12 w-full rounded-xl bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            <Check />
            Sign In
          </Button>
        </Form>

        {/* Signup Link */}
        <p className="mt-7 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-blue-400 transition hover:text-blue-300 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

