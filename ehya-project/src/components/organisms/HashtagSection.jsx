import { FiActivity, FiCommand, FiTrendingUp, FiSend } from "react-icons/fi";

function IconBox({ children, gradient }) {
  return (
    <div
      className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl shadow-md ${gradient}`}
    >
      {children}
    </div>
  );
}

export default function HashtagSection() {
  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Track any hashtag(s) Performance
      </h2>

      {/* Subtext */}
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        <span className="bg-yellow-100 px-2 py-1 rounded">
          Don’t waste time on search manual tasks. Let Automation do it for you.
        </span>
        <br />
        Simplify workflows, reduce errors, and save time.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
          <IconBox gradient="bg-gradient-to-br from-red-400 to-pink-500">
            <FiActivity />
          </IconBox>
          <h3 className="font-semibold text-lg mt-4 mb-2">Hashtag Growth</h3>
          <p className="text-gray-600 text-sm">
            Follow a hashtag growth across posts, videos and images.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
          <IconBox gradient="bg-gradient-to-br from-blue-400 to-indigo-500">
            <FiCommand />
          </IconBox>
          <h3 className="font-semibold text-lg mt-4 mb-2">Identify Hashtag</h3>
          <p className="text-gray-600 text-sm">
            Identify the most influential people posting with your hashtag.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
          <IconBox gradient="bg-gradient-to-br from-yellow-400 to-orange-500">
            <FiTrendingUp />
          </IconBox>
          <h3 className="font-semibold text-lg mt-4 mb-2">Most Influential Post</h3>
          <p className="text-gray-600 text-sm">
            See the most influential posts on hashtags you are following on.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
          <IconBox gradient="bg-gradient-to-br from-teal-400 to-cyan-500">
            <FiSend />
          </IconBox>
          <h3 className="font-semibold text-lg mt-4 mb-2">Hashtag Location</h3>
          <p className="text-gray-600 text-sm">
            Visualize where people are posting using your hashtag.
          </p>
        </div>
      </div>
    </section>
  );
}
