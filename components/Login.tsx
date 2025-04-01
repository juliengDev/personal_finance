"use client";

import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom d'utilisateur doit comporter au moins 2 caractères.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères",
  }),
});

 function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  // console.log(form);
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-preset-5 text-grey-500">Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <div className="w-full max-w-[306px] overflow-hidden">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            const [showPassword, setShowPassword] = useState(false);

            return (
              <FormItem>
                <FormLabel className="text-preset-5 text-grey-500">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input type={showPassword ? "text" : "password"} placeholder="" {...field} />
                    <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                  </div>
                </FormControl>
                <FormDescription></FormDescription>
                <div className="w-full max-w-[306px] overflow-hidden">
                  <FormMessage />
                </div>
              </FormItem>
            );
          }}
        />
        <Button type="submit" variant="primary" className="w-full py-4 mb-8 cursor-pointer">
          Login
        </Button>
      </form>
    </Form>
  );
}

function Login() {
  return (
    <div className="my-6 mx-5">
      <h1 className="text-preset-1 mb-8">Login</h1>
      <LoginForm />
      <footer className="flex justify-between gap-2 mx-8">
        <p className="text-preset-4 text-grey-500">Need to create an account ?</p>
        <Link href="/signup" className="underline text-preset-4-bold">
          Sign Up
        </Link>
      </footer>
    </div>
  );
}

export default Login;
