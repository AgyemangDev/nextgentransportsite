import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00205B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">NextGen Transport</h3>
            <p className="text-sm mb-4">
              Your trusted partner for comfortable and reliable transportation
              services across the country.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@next.gen.transport?_t=ZM-8wIgUD6t85d&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://x.com/nextgentran?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://wa.link/bk1rpq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm hover:text-gray-300">
                  Book a Ride
                </Link>
              </li>
              <li>
                <Link to="/my-tickets" className="text-sm hover:text-gray-300">
                  My Tickets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2" />
                0501969813
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2" />
                nextgentransport@gmail.com
              </li>
              <li className="flex items-start text-sm">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>KNUST Campus, Kumasi, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#00307A] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 flex flex-col md:flex-row items-center">
            &copy; {new Date().getFullYear()}
            <span className="mx-1">NextGen Transport</span>
            <span className="ml-2">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
