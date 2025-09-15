import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    content:
      "I dey Accra, and every semester I for travel come KNUST campus. Since I start dey use this transport service, I no dey stress again. I just book online, choose seat, then relax.",
    author: "Kojo Amponsah – Computer Science, Level 300",
  },
  {
    content:
      "Travelling from Tarkwa to Kumasi used to be tiring until I started using this service. It's efficient and very student-friendly. Always on time!",
    author: "Akua Nyamekye – Natural Resources, Level 200",
  },
  {
  content:
    "Traveling from Kumasi to Obuasi Campus used to be a hassle, but this service has made everything seamless. I can book ahead, choose my seat, and the ride is always punctual and comfortable. It’s perfect for students like me who commute regularly.",
  author: "Ama Konadu – Biological Sciences, Obuasi Campus, Level 300",
},
  {
    content:
      "As an engineering student from Tema, I value safety and punctuality. The buses are in great condition, and the drivers are professional.",
    author: "Yaw Manu – Electrical Engineering, Level 400",
  },
  {
    content:
      "I dey come from Tamale go KNUST every semester. The journey long but the comfort be top tier. AC dey, USB port dey, leg room too dey. I just chill throughout.",
    author: "Elisha Kumi – Architecture, Level 300",
  },
  {
    content:
      "I'm a Business Admin student in KNUST, and I often travel from Cape Coast. This platform makes it so easy to plan my trip—smooth booking and reliable buses.",
    author: "Kwame Baffour – Business Administration, Level 200",
  },
  {
  content:
    "As a student based in Accra, getting to Obuasi Campus used to be stressful. But ever since I started using this platform, my trips have been stress-free. I just book online, board comfortably, and arrive safely. Highly recommended for all students.",
  author: "Daniel Owusu – Computer Engineering, Obuasi Campus, Level 200",
},
  {
    content:
      "I be fresher from Accra. First time I dey come KNUST, the bus carry we straight go Parade grounds, close to Repu, Indece den Queens hall. No confusion, no stress. Booking process be simple.",
    author: "Emmanuel Adjei – Law, Level 100",
  },
];



const TestimonialsSection = () => (
  <section className="py-12 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#00205B] mb-8">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
