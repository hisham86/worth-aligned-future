
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingOption: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}> = ({ title, price, description, features, cta, featured = false }) => {
  return (
    <div 
      className={`rounded-xl p-8 ${featured ? 'bg-blue-50 border border-blue-200' : 'bg-white border border-slate-200'} 
      h-full flex flex-col`}
    >
      {featured && (
        <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium w-fit mb-4">
          Recommended
        </div>
      )}
      <h3 className="font-bold text-xl mb-2 text-slate-800">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        <span className="text-slate-600 ml-1">/month</span>
      </div>
      <p className="text-slate-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={featured ? "default" : "outline"} 
        className={`w-full ${featured ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50 border-blue-600 text-blue-600"}`}
      >
        {cta}
      </Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Transparent, straightforward pricing
          </h2>
          <p className="text-lg text-slate-600">
            No hidden fees. Choose the plan that works best for your career goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingOption 
            title="Basic"
            price="$49"
            description="Perfect for job seekers looking for essential support."
            features={[
              "AI Interview Question Generator",
              "Salary Benchmarking Tool",
              "Basic Negotiation Scripts",
              "Resume Review",
              "Email Support"
            ]}
            cta="Get Started"
          />
          
          <PricingOption 
            title="Pro"
            price="$99"
            description="For professionals seeking comprehensive career advancement."
            features={[
              "Everything in Basic",
              "1:1 Mock Interviews (2/month)",
              "Personalized Negotiation Strategy",
              "Industry-Specific Coaching",
              "Priority Support",
              "LinkedIn Profile Optimization"
            ]}
            cta="Start Free Trial"
            featured
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
