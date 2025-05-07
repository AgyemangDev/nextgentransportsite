import { Star } from "lucide-react";

const TestimonialCard = ({ content, author }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
    <div className="flex items-center text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">"{content}"</p>
    <div className="font-medium">- {author}</div>
  </div>
);

export default TestimonialCard;
