export default function FeatureSection() {
  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-70">
        <img src="/logos/slack.png" alt="Slack" className="h-12" />
        <img src="/logos/netflix.jpeg" alt="Netflix" className="h-10" />
        <img src="/logos/google.jpeg" alt="Google" className="h-12" />
        <img src="/logos/airbnb.png" alt="Airbnb" className="h-20" />
        <img src="/logos/uber.png" alt="Uber" className="h-12" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
        {/* Left text */}
        <div className="md:w-1/2 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">
            Schedule Your Post <br /> Whenever You Want
          </h2>
          <p className="mb-6 text-gray-600">
            Publish your content automatically to ensure it reaches the right
            people. Built-in features include:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✔️ Best Time to Post</li>
            <li>✔️ Geolocation</li>
            <li>✔️ User Tag</li>
            <li>✔️ Other Benefits</li>
          </ul>
          <a href="#"
             className="mt-6 inline-block text-blue-600 font-medium hover:underline">
            Learn about scheduled post →
          </a>
        </div>

        {/* Right image */}
        <div className="md:w-1/2">
          <img
            src="/logos/laptopps.jpeg"
            alt="Laptop demo"
            className="mx-auto w-80 md:w-[500px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
