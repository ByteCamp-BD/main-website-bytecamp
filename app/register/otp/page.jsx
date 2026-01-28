"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase"; 

export default function OTPPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(90);
  const router = useRouter();

  // Countdown
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) return alert("OTP required");

    setLoading(true);

    // Check OTP in Supabase
    const { data, error } = await supabase
      .from("otp_verification")
      .select("*")
      .eq("email", email)
      .eq("otp", otp)
      .single();

    if (error || !data) {
      alert("Invalid OTP or expired!");
      setLoading(false);
      return;
    }

    // Insert into users table
    const { error: userError } = await supabase.from("users").insert([
      {
        email: data.email,
        full_name: data.full_name,
        phone: data.phone,
        known_as: data.known_as,
      },
    ]);

    if (userError) {
      alert("Failed to create account");
    } else {
      alert("OTP verified! Account created.");
      router.push("/");
    }

    setLoading(false);
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleVerify} className="bg-gray-800 p-8 rounded-xl text-white space-y-4 w-96">
        <h1 className="text-2xl font-bold">Enter OTP</h1>
        <p className="text-gray-300">OTP sent to: {email}</p>
        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-center tracking-widest text-lg"
          placeholder="6-digit OTP"
        />
        <p className="text-gray-400 text-center">Expires in: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
        <button disabled={loading || timer <= 0} className="w-full py-2 bg-teal-500 rounded hover:bg-teal-600">
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        {timer <= 0 && <p className="text-red-500 text-center">OTP expired. Please register again.</p>}
      </form>
    </div>
  );
}
