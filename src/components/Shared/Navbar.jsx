// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">
              EverCare.io
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>




         <Link
  href="/service/baby"
  className="text-gray-700 hover:text-green-600"
>
  Baby Care
</Link>

<Link
  href="/service/elderly"
  className="text-gray-700 hover:text-green-600"
>
  Elderly Care
</Link>

<Link
  href="/service/sick"
  className="text-gray-700 hover:text-green-600"
>
  Sick People Service
</Link>





            <Link href="/my-bookings" className="text-gray-700 hover:text-green-600">
              My Bookings
            </Link>
            <Link
              href="/login"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Login / Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-4 space-y-1 shadow-md">
          <Link href="/" className="block text-gray-700 px-3 py-2 rounded-md hover:bg-green-50">
            Home
          </Link>
          <Link href="/services" className="block text-gray-700 px-3 py-2 rounded-md hover:bg-green-50">
            Services
          </Link>
          <Link href="/my-bookings" className="block text-gray-700 px-3 py-2 rounded-md hover:bg-green-50">
            My Bookings
          </Link>
          <Link
            href="/login"
            className="block bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600"
          >
            Login / Register
          </Link>
        </div>
      )}
    </nav>
  );
}
