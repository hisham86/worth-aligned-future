
import React from "react";

const testimonials = [
  {
    quote: "Using PayWorth.io's negotiation strategies, I secured a $25K higher salary than the initial offer. Worth every penny.",
    author: "Alex Chen",
    role: "Senior Product Manager",
    company: "Tech Innovations Inc.",
  },
  {
    quote: "The interview coaching gave me the confidence to ace my dream job interview. Now I'm making 30% more than my previous position.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Brand Solutions",
  },
  {
    quote: "I was underselling myself for years. PayWorth showed me my true market value and how to communicate it effectively.",
    author: "Michael Rodriguez",
    role: "Software Engineer",
    company: "Future Technologies",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-800">
            Success stories from our clients
          </h2>
          <p className="text-slate-500 text-base">
            Here's what people are saying about their PayWorth.io experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-slate-600 mb-6 text-sm">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium text-slate-800">{testimonial.author}</p>
                <p className="text-slate-500 text-xs">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
