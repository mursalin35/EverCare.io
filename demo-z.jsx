    import React from "react";
    
    export default function HomePage() {
      return (
        <div className="w-full overflow-hidden">
    
          {/* ================= HERO SECTION ================= */}
          <section className="h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center text-white">
            <div className="text-center max-w-4xl px-6">
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Compassionate Care, Trusted Support
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Professional caregivers for your loved ones — anytime, anywhere.
              </p>
              <button className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
                Get Started
              </button>
            </div>
          </section>
    
          {/* ================= ABOUT SECTION ================= */}
          <section className="py-24 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-8 text-[#2c5364]">
                About EverCare.io
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                EverCare.io is a trusted caregiving platform dedicated to providing 
                professional and compassionate services for families. 
                Our mission is to connect skilled caregivers with those who need 
                support the most — ensuring safety, dignity, and comfort.
              </p>
            </div>
          </section>
    
          {/* ================= SERVICES SECTION ================= */}
          <section className="py-24 bg-gradient-to-r from-[#e0f7fa] to-[#f1f8ff]">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 text-[#203a43]">
                Our Services
              </h2>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    
                {/* Baby Care */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-2xl font-bold mb-4 text-[#0072ff]">
                    Baby Care
                  </h3>
                  <p>
                    Loving and experienced caregivers ensuring your child’s safety, 
                    growth, and happiness at all times.
                  </p>
                </div>
    
                {/* Elderly Service */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-2xl font-bold mb-4 text-[#00c6ff]">
                    Elderly Service
                  </h3>
                  <p>
                    Respectful and compassionate elderly care services 
                    tailored to individual health and comfort needs.
                  </p>
                </div>
    
                {/* Sick People Service */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-2xl font-bold mb-4 text-[#2c5364]">
                    Sick People Service
                  </h3>
                  <p>
                    Professional medical support and daily assistance 
                    for patients recovering at home.
                  </p>
                </div>
    
              </div>
            </div>
          </section>
    
          {/* ================= TESTIMONIAL SECTION ================= */}
          <section className="py-24 bg-[#0f2027] text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-16">
                What Our Clients Say
              </h2>
    
              <div className="grid md:grid-cols-3 gap-10">
    
                <div className="bg-[#203a43] p-8 rounded-xl">
                  <p className="italic mb-4">
                    “EverCare.io provided the best caregiver for my mother. 
                    Truly professional and caring service.”
                  </p>
                  <h4 className="font-semibold">– Rahim Ahmed</h4>
                </div>
    
                <div className="bg-[#203a43] p-8 rounded-xl">
                  <p className="italic mb-4">
                    “Reliable baby care service. I feel safe leaving my child 
                    in their hands.”
                  </p>
                  <h4 className="font-semibold">– Nusrat Jahan</h4>
                </div>
    
                <div className="bg-[#203a43] p-8 rounded-xl">
                  <p className="italic mb-4">
                    “Professional and compassionate. Highly recommended.”
                  </p>
                  <h4 className="font-semibold">– Karim Hasan</h4>
                </div>
    
              </div>
    
              <div className="mt-16 text-2xl font-bold">
                5,000+ Families Served | 98% Satisfaction Rate
              </div>
            </div>
          </section>
    
        </div>
      );
    }
    