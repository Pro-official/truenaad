"use client";
import React, { useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import Link from "next/link";
// import { useAuth } from "../../hooks/useAuth";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name_9310327373: z.string(),
  name_9361980904: z.string(),
  name_1845628313: z.string(),
  name_2778401263: z.string(),
  name_2844206932: z.string(),
  name_1660046447: z.string(),
});

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { register } = useAuth();

  // const from = location.state?.from?.pathname || "/";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!name || !email || !password) {
      setError("Please fill all the fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://ism-server.onrender.com/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role: "Employee",
          }),
        },
      );

      if (!response.ok) {
        const message = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, ${message}`);
      }

      // const data = await response.json();
      // await register(data._id, data.name, data.email, data.role);
      // navigate(from, { replace: true });
    } catch (err: unknown) {
      let errorMessage = "Failed to create account";

      if (err instanceof Error) {
        errorMessage = `Failed to create account, ${err.message}`;
      } else if (typeof err === "string") {
        errorMessage = `Failed to create account, ${err}`;
      } else {
        errorMessage = `Failed to create account, ${JSON.stringify(err)}`;
      }
      console.log(errorMessage);
      setError("Failed to create account");
    }
  };

  return (
    <>
      {/*  */}
      <Form {...form}>
        <form className="mx-auto min-h-screen max-w-3xl space-y-8 border border-white/10 bg-white/5 p-8 py-10 pb-12 pt-24 backdrop-blur-lg">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="name_9310327373"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormDescription>This is your first name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="name_9361980904"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormDescription>Your last name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <FormField
                control={form.control}
                name="name_1845628313"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormDescription>Your email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              {/* <FormField
          control={form.control}
          name="name_2778401263"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Placeholder" {...field} />
              </FormControl>
              <FormDescription>Enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
            </div>

            <div className="col-span-6">
              {/* <FormField
            control={form.control}
            name="name_2844206932"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Placeholder"
                    {...field}
                    defaultCountry="TR"
                  />
                </FormControl>
              <FormDescription>Enter your phone number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
            </div>
          </div>

          {/* <FormField
          control={form.control}
          name="name_1660046447"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
                <FormDescription>You can be an Author or an User</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* *********************************** */}

      <div
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.5 }}
        className="flex min-h-screen items-center justify-center pb-12 pt-24"
      >
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-white">
              Create Account
            </h1>
            <p className="text-gray-400">
              Join IdeaShare and start sharing your ideas
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-500">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 font-medium text-white transition-all hover:from-purple-600 hover:to-pink-600"
            >
              <UserPlus className="h-5 w-5" />
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-purple-400 hover:text-purple-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
import { zodResolver as hookFormZodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function zodResolver(
  formSchema: z.ZodObject<
    {
      name_9310327373: z.ZodString;
      name_9361980904: z.ZodString;
      name_1845628313: z.ZodString;
      name_2778401263: z.ZodString;
      name_2844206932: z.ZodString;
      name_1660046447: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      name_9310327373: string;
      name_9361980904: string;
      name_1845628313: string;
      name_2778401263: string;
      name_2844206932: string;
      name_1660046447: string;
    },
    {
      name_9310327373: string;
      name_9361980904: string;
      name_1845628313: string;
      name_2778401263: string;
      name_2844206932: string;
      name_1660046447: string;
    }
  >,
):
  | import("react-hook-form").Resolver<
      {
        name_9310327373: string;
        name_9361980904: string;
        name_1845628313: string;
        name_2778401263: string;
        name_2844206932: string;
        name_1660046447: string;
      },
      unknown
    >
  | undefined {
  return hookFormZodResolver(formSchema);
}
