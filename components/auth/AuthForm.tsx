"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { cn } from "@/lib/utils";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-cyan-900/20 p-1">
          {["Login", "Register"].map((tab) => (
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
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <LoginForm />
          </Tab.Panel>
          <Tab.Panel>
            <RegisterForm />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
