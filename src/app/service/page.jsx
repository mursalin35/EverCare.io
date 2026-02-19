import Link from "next/link";

export const services = [
  {
    id: "baby",
    title: "Baby Care",
    description: "Professional baby sitting service."
  },
  {
    id: "elderly",
    title: "Elderly Service",
    description: "Care for senior citizens."
  },
  {
    id: "sick",
    title: "Sick People Service",
    description: "Medical support at home."
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-[#F5F5F5]">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#333]">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FFA500]">
              {service.title}
            </h3>

            <p className="mb-4 text-[#333]">
              {service.description}
            </p>

            <Link
              href={`/service/${service.id}`}
              className="bg-[#FFA500] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
