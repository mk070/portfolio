import Image from "../../assets/images/client-logos/partner1.png"
import { useRef, useState } from "react"

export default function Testimonial() {
  const testimonials = [
    {
      name: "Madab",
      role: "Small Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      quote: "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration."
    },
    {
      name: "David Patel",
      role: "Project Manager",
      image: "/placeholder.svg?height=80&width=80",
      quote: "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality."
    },
    {
      name: "Emily Carter",
      role: "Operations Manager",
      image: "/placeholder.svg?height=80&width=80",
      quote: "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow."
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#020817] flex items-center justify-center p-4 container-fluid">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-medium text-white mb-4">What people say</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Discover what our satisfied customers have to say about their experiences with our products/services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="rounded-2xl p-8 backdrop-blur-sm bg-white/5 border border-white/10 relative overflow-hidden group card h-100"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <div className="mb-6">
        <img
          src={testimonial.image}
          alt={`${testimonial.name}'s profile picture`}
          width={80}
          height={80}
          className="rounded-full mx-auto"
        />
      </div>
      <h3 className="text-white text-xl font-medium mb-1">
        {testimonial.name}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{testimonial.role}</p>
      <p className="text-gray-300 text-sm leading-relaxed">
        {testimonial.quote}
      </p>
    </div>
  );
}

