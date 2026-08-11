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

const Signup = () => {
  const onSubmit =async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);

    const { data, error } = await authClient.signUp.email({
    name: userData.name, // required
    email: userData.email, // required
    password:userData.password, // required
    
    callbackURL: "/",
    
});
console.log("asce",data)
  
    console.log("ERROR:", error)
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
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-300">
            Sign up to get started
          </p>
        </div>

        <Form
          className="flex w-full flex-col gap-5"
          onSubmit={onSubmit}
        >
          {/* name */}
           <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="mb-2 text-sm font-medium text-gray-200">Name</Label>
            <Input className="rounded-xl border-white/10 bg-white/10 text-white placeholder:text-gray-400" placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
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
              placeholder="Enter Your email"
              className="rounded-xl border-white/10 bg-white/10 text-white placeholder:text-gray-400"
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className="mb-2 text-sm font-medium text-gray-200">
              Password
            </Label>

            <Input
              placeholder="Enter your password"
              className="rounded-xl border-white/10 bg-white/10 text-white placeholder:text-gray-400"
            />

            <Description className="mt-2 text-xs text-gray-400">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="mt-2 flex gap-3">
            <Button
              type="submit"
              className="h-12 flex-1 rounded-xl bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              <Check />
              Submit
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="h-12 rounded-xl border border-white/10 bg-white/10 px-6 text-white hover:bg-white/20"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Login Link */}
        <p className="mt-7 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-semibold text-blue-400 transition hover:text-blue-300 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;