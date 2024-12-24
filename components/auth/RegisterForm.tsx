"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    category: "Excom",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    designation: "",
    domain: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    designation: "",
    domain: "",
  });
  const supabase = createClientComponentClient();

  const registerMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            category: formData.category,
            ...(formData.category === "Excom" && {
              designation: formData.designation,
            }),
            ...(formData.category !== "Excom" && { domain: formData.domain }),
          },
        },
      });
      if (error) throw error;
    },
    {
      onSuccess: () => {
        console.log("Registered successfully");
      },
      onError: (error) => {
        console.error("Registration error:", error);
      },
    }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      designation: "",
      domain: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    if (formData.category === "Excom" && !formData.designation) {
      newErrors.designation = "Designation is required for Excom";
      valid = false;
    }
    if (formData.category !== "Excom" && !formData.domain) {
      newErrors.domain = "Domain is required for Heads and Members";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      registerMutation.mutate();
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
                classNames(
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
            htmlFor="name"
            className="block text-sm font-medium text-cyan-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

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

        {formData.category === "Excom" && (
          <div>
            <label
              htmlFor="designation"
              className="block text-sm font-medium text-cyan-700"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
            />
            {errors.designation && (
              <p className="mt-1 text-sm text-red-600">{errors.designation}</p>
            )}
          </div>
        )}

        {formData.category !== "Excom" && (
          <div>
            <label
              htmlFor="domain"
              className="block text-sm font-medium text-cyan-700"
            >
              Domain
            </label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
            />
            {errors.domain && (
              <p className="mt-1 text-sm text-red-600">{errors.domain}</p>
            )}
          </div>
        )}

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

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-cyan-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          disabled={registerMutation.isPending}
        >
          {registerMutation.isPending ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
