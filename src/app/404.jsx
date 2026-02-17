// app/not-found.jsx
"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Illustration / Image */}
      {/* <img
        src="/images/404-illustration.png" // replace with your illustration
        alt="Page not found"
        className="w-1/2 max-w-md mb-8"
      /> */}

      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>

      {/* Subheading */}
      <p className="text-xl text-gray-600 mb-6 text-center">
        Oops! The page you are looking for doesn’t exist.
      </p>

      {/* Call-to-action */}
      <Link
        href="/"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
