export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md">
            <p className="italic mb-4">
              “Excellent baby care service. Very professional.”
            </p>
            <h4 className="font-semibold">– Nusrat Jahan</h4>
          </div>

          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md">
            <p className="italic mb-4">
              “My father received amazing elderly support.”
            </p>
            <h4 className="font-semibold">– Rahim Ahmed</h4>
          </div>

          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md">
            <p className="italic mb-4">
              “Highly trusted and reliable platform.”
            </p>
            <h4 className="font-semibold">– Karim Hasan</h4>
          </div>
        </div>

        <div className="text-2xl font-bold">
          5,000+ Bookings | 98% Satisfaction | 300+ Verified Caregivers
        </div>

      </div>
    </section>
  );
}
