// components/Footer.jsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#4CAF50]">
              Care.xyz
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Reliable and trusted caregiving platform providing 
              baby sitting, elderly care, and special home support 
              services with safety and professionalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-[#4CAF50] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#4CAF50] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="hover:text-[#4CAF50] transition">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#4CAF50] transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-[#4CAF50] transition cursor-pointer">
                Baby Care
              </li>
              <li className="hover:text-[#4CAF50] transition cursor-pointer">
                Elderly Care
              </li>
              <li className="hover:text-[#4CAF50] transition cursor-pointer">
                Sick People Service
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Email: support@care.xyz</li>
              <li>Phone: +880 1234 567890</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Care.xyz. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#4CAF50] transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#4CAF50] transition">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
