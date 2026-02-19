
import Link from "next/link";
import { services } from "../page";


export default function ServiceDetails({ params }) {
  const { service_id} = params;

  const service = services.find((s) => s.id === service_id);

  if (!service) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] p-6">
      <h1 className="text-4xl font-bold mb-4 text-[#FFA500]">
        {service.title}
      </h1>

      <p className="mb-6 max-w-xl text-center">
        {service.description}
      </p>

      <Link
        href="/booking"
        className="bg-[#4CAF50] text-white px-6 py-3 rounded-xl"
      >
        Book Service
      </Link>
    </div>
  );
}
