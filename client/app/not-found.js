"use client";

import NavButton from "@/components/ui/NavButton";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white text-center px-4">
      {/* ❌ 404 Title */}
      <h1 className="text-7xl font-extrabold text-green-700 mb-4 drop-shadow-sm">
        404
      </h1>

      {/* 🧭 Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* 🏠 Return Button */}
      <NavButton
        variant="primary"
        href="/"
        label="Return Home"
        className="px-6 py-3 rounded-xl shadow-md bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-300"
      />
    </section>
  );
}
