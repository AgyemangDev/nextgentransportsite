import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

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
              <a href="#" className="hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={20} />
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
                +233 123 456 789
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2" />
                <h3>info@NextGenTransport.com</h3>
              </li>
              <li className="flex items-start text-sm">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>123 Transportation Road, Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#00307A] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}
            <h3>NextGen Transport</h3>
            <span className="ml-2">All rights reserved.</span>
          </p>
          <div className="text-sm">
            <span>Developed by </span>
            <a
              href="https://hostelhubb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-blue-300 underline transition-colors"
            >
              HostelHubb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
