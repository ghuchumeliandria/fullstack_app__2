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
    <div className="bg-background p-6 rounded shadow-md w-full max-w-lg mx-auto text-foreground space-y-5">
      <h1 className="text-3xl font-bold">Newsletter</h1>
      <p>
        Want to be the first to know when a new blog post drops? Subscribe
        newsletter and receive instant alerts whenever someone publish fresh
        content. Whether it's a coding deep-dive, a tech tip, or a personal
        project — you’ll get notified right away. Plus, you’ll be able to like
        and engage with the posts you enjoy most. Just drop your email below and
        join the community of developers and curious minds who never miss an
        update!
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
        className="w-full px-3 py-2 border rounded bg-background text-foreground"
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
