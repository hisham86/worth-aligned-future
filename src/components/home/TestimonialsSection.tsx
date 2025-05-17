
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
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success stories from our clients
          </h2>
          <p className="text-xl text-slate-600">
            Here's what people are saying about their PayWorth.io experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-slate-600 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
