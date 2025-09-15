import React from 'react';
import Transport1 from "../../assets/transport5.jpeg"
// Option 3: Public folder approach (recommended for debugging)
// Place images in public/images/ folder and use:
import transport5 from '../../assets/transport5.jpeg';
import transport6 from '../../assets/transport6.jpeg';
import transport7 from '../../assets/transport7.jpeg';
import transport4 from '../../assets/transport4.jpg';

const images = [
  { img: transport5, alt: '' },
  { img: transport6, alt: '' },
  { img: transport7, alt: '' },
  { img: transport4, alt: '' },
];

// Fallback placeholder image as base64 (small transport-themed placeholder)
const placeholderImage = ":image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cg transform='translate(150 100)'%3E%3Cpath d='M20 60h60v20H20z' fill='%236b7280'/%3E%3Ccircle cx='30' cy='90' r='10' fill='%236b7280'/%3E%3Ccircle cx='70' cy='90' r='10' fill='%236b7280'/%3E%3C/g%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='14' font-family='Arial'%3ETransport Image%3C/text%3E%3C/svg%3E";

const ImageGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                NextGen
                <span className="block text-blue-600">Transport</span>
              </h1>
              <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
            </div>
           
            <p className="text-xl text-gray-600 leading-relaxed">
              🚍🌍 We're transforming student transport across Ghana! 🎓✨
              From any corner of the country, ride safely and comfortably straight to your campus. 💺
              Our smart, eco-friendly system makes every journey reliable, affordable, and stress-free. 🌱💡
              Because getting to class should be the easiest part of your university experience. 📚🚀
            </p>
          </div>
         
          {/* Right side - Image gallery */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <img
                    src={image.img}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      console.log(`Failed to load image: ${image.src}`);
                      e.target.src = placeholderImage;
                      e.target.onError = null; // Prevent infinite loop
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded: ${image.src}`);
                    }}
                  />
                </div>
               
                {/* Overlay on hover */}
               
                {/* Image label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;