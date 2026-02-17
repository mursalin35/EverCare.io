"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Trusted Care for Your Loved Ones",
    desc: "Professional caregivers for children and elderly family members.",
  },
  {
    title: "Safe & Reliable Baby Sitting",
    desc: "Experienced caregivers ensuring safety and happiness.",
  },
  {
    title: "Compassionate Elderly Support",
    desc: "Respect, dignity, and medical assistance at home.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white overflow-hidden">
      <div className="text-center max-w-4xl px-6 transition-all duration-700">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          {slides[current].title}
        </h1>
        <p className="text-xl mb-8 opacity-90">
          {slides[current].desc}
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-lg font-semibold transition">
          Book a Service
        </button>
      </div>
    </section>
  );
}
