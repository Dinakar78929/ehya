import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterWithContact() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ehya<span className="text-blue-400">.</span></h2>
          <p className="mb-4">Build a modern and creative website with crealand</p>
          <div className="flex space-x-4 text-lg text-gray-400">
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Landingpage</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Referral Program</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Design</a></li>
            <li><a href="#" className="hover:text-white">Themes</a></li>
            <li><a href="#" className="hover:text-white">Illustrations</a></li>
            <li><a href="#" className="hover:text-white">UI Kit</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
        <span className="inline-block text-blue-400 text-xl">♥</span> <br />
        Copyright © 2021. Crafted with love.
      </div>
    </footer>
  );
}
