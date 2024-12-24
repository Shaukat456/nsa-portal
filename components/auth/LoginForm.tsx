"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    category: "Excom",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const supabase = createClientComponentClient();

  const loginMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
    },
    {
      onSuccess: () => {
        // Handle successful login (e.g., redirect or show message)
        console.log("Logged in successfully");
      },
      onError: (error) => {
        // Handle login error
        console.error("Login error:", error);
      },
    }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      loginMutation.mutate();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-4">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-cyan-900/20 p-1">
          {["Excom", "Heads", "Member"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                cn(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-cyan-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-cyan-700 shadow"
                    : "text-cyan-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
              onClick={() =>
                setFormData((prev) => ({ ...prev, category: tab }))
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      <form onSubmit={onSubmit} className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-cyan-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-cyan-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
