export default function ServicesOverview() {
  const services = [
    {
      title: "Baby Care",
      desc: "Loving and experienced caregivers for your children.",
    },
    {
      title: "Elderly Service",
      desc: "Compassionate elderly support and assistance.",
    },
    {
      title: "Sick People Service",
      desc: "Professional medical and recovery assistance at home.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-teal-600">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                {service.title}
              </h3>
              <p className="mb-6">{service.desc}</p>
              <button className="text-orange-500 font-semibold hover:underline">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
