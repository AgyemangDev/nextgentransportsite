import { CalendarDays, ArrowRight } from "lucide-react";
import transport1 from "../assets/transp.jpg";
import transport2 from "../assets/transport2.jpg";
import transport3 from "../assets/transport3.jpg";

const blogPosts = [
  {
    img: transport1,
    title: "Bridging Campuses & Cities",
    date: "April 12, 2025",
    excerpt:
      "NextGen Transport connects students with city hubs, ensuring access to reliable, affordable travel that supports academic success and independence.",
  },
  {
    img: transport2,
    title: "Safety-Driven Innovation",
    date: "March 30, 2025",
    excerpt:
      "From verified drivers to real-time tracking, we place student safety at the heart of every trip — redefining how students move across Ghana.",
  },
  {
    img: transport3,
    title: "More Than Just Transport",
    date: "February 18, 2025",
    excerpt:
      "We're not just moving people — we're creating opportunities. Our service helps students discover, connect, and grow.",
  },
];

export default function AboutUsBlogSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#00205B]">
          About NextGen Transport
        </h2>
        <p className="text-gray-600 mt-2">
          Learn how we’re reshaping student transportation across campuses and
          beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <CalendarDays size={16} className="mr-1" />
                {post.date}
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
