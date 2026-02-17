export default function AboutSection() {
  return (
    <section className="py-24 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-6 text-teal-600">
            About EverCare.io
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            EverCare.io is a modern caregiving platform designed to connect
            families with trusted and verified caregivers.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission is to make caregiving easy, secure, and accessible
            for everyone — ensuring comfort and peace of mind.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-12 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">
            Why Choose Us?
          </h3>
          <ul className="space-y-3 text-lg">
            <li>✔ Verified Caregivers</li>
            <li>✔ Easy Online Booking</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ 24/7 Support</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
