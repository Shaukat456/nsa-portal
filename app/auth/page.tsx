"use client";

import AuthForm from "../../components/auth/AuthForm";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-cyan-800 mb-6">
          Welcome
        </h1>
        {/* <AuthForm /> */}
      </div>
    </div>
  );
}
