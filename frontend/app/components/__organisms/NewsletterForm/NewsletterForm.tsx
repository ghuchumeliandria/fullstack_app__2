"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email) return setError("Email is required");
    const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!valid) return setError("Enter a valid email address");

    setMessage("You're now subscribed! ✅");
    setError("");
    localStorage.setItem("newsletterEmail", email);
    setEmail("");
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto text-black space-y-5">
      <h1 className="text-3xl font-bold">Newsletter</h1>
      <p>
        Want to stay updated on my latest articles, coding tutorials, and
        personal adventures? Sign up for my newsletter! It’s a simple way to
        keep track of new posts and occasional coding tips I discover. Just drop
        your email in the sign-up box, and I’ll send you updates whenever
        there’s something new to share.
      </p>
      <p className="font-semibold">
        I’d love to have you along for the ride and also hear about your own
        journey!
      </p>

      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
          setMessage("");
        }}
        placeholder="email@example.com"
        className="w-full px-3 py-2 border rounded bg-white"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      {message && <p className="text-sm text-green-600">{message}</p>}

      <button
        onClick={handleSubscribe}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Stay updated
      </button>

      <p className="text-sm text-gray-600 mt-2">
        Unsubscribe anytime. No spam, I promise 😇
      </p>
    </div>
  );
}
