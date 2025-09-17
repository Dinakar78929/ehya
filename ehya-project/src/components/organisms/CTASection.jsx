export default function CTASection() {
  return (
    <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg mx-6 md:mx-12 my-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Grow your brand <br /> presence on social media <span>😍</span>
          </h2>
          <p className="mt-4">
            Join with more <span className="font-semibold">1200+ happy customers</span>
          </p>

          {/* Avatars */}
          <div className="flex items-center mt-4">
            <img
              src="/avatars/user2.jpg"
              alt="Customer"
              className="w-10 h-10 rounded-full border-2 border-white -ml-0"
            />
            <img
              src="/avatars/user3.jpg"
              alt="Customer"
              className="w-10 h-10 rounded-full border-2 border-white -ml-3"
            />
            <img
              src="/avatars/user4.jpg"
              alt="Customer"
              className="w-10 h-10 rounded-full border-2 border-white -ml-3"
            />
            <span className="ml-3 underline cursor-pointer">and others</span>
          </div>
        </div>

        {/* Right button */}
        <div className="mt-6 md:mt-0">
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded shadow hover:bg-gray-100">
            Get your trial now
          </button>
        </div>
      </div>
    </section>
  );
}
