import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/home" className="hover:text-teal-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-teal-500">
                Products
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-teal-500">
                Gallery
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-teal-500">
                Blog
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:text-teal-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul>
            <li className="mb-2">Phone: +1 234 567 890</li>
            <li className="mb-2">Email: info@company.com</li>
            <li>Address: 123 Business St., City, Country</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter Signup</h3>
          <form action="#" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
