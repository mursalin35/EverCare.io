"use client";
import { useState } from "react";
// import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
//   const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-3xl font-bold mb-6 text-[#4CAF50] text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => login(email, password)}
          className="w-full bg-[#FFA500] text-white py-3 rounded-lg hover:bg-[#e59400] transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
