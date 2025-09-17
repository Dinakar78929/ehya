import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TestimonialSection() {
  return (
    <section className="px-6 md:px-12 py-20 bg-blue-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 leading-snug mb-4">
            Powering the growth of <br />
            <span className="text-blue-600">100+ business & retailers</span> in
            Indonesia.
          </h2>
          <p className="text-gray-600">
            From single store, startups, to large multi-store brands.
          </p>
        </div>

        {/* Right */}
        <div className="bg-white rounded-lg shadow p-6 relative">
          <FaQuoteLeft className="text-3xl text-blue-500 mb-3" />

          <div className="flex text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-gray-700 italic mb-6">
            “With Ehya, we’re able to easily track our performance in full
            detail. It’s become an essential tool for us to grow and engage with
            our audience.”
          </p>

          <div className="flex items-center gap-3">
            <img
              src="/avatars/user1.jpg"
              alt="Customer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">Jaquon Hart</p>
              <p className="text-sm text-gray-500">
                Digital Marketing Executive, Hypebeast
              </p>
            </div>
          </div>

          {/* Navigation (non-functional placeholder) */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 cursor-pointer">
            <FiChevronLeft />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 cursor-pointer">
            <FiChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
}
