
import React from "react";
import { DollarSign, Users, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Salary Negotiation Coaching",
    description: "Learn proven techniques to negotiate higher salaries with confidence. Our strategies have helped clients earn 15-30% more.",
    icon: <DollarSign className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Interview Preparation",
    description: "Get personalized coaching for technical and behavioral interviews. Practice with industry-specific questions and feedback.",
    icon: <Users className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Career Trajectory Planning",
    description: "Map your career path with salary milestones. Understand market rates and position yourself for maximum earning potential.",
    icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-800">
            The tools you need for career success
          </h2>
          <p className="text-slate-500 text-base">
            Everything you need to advance your career and maximize your earning potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-slate-50">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium mb-2 text-slate-800">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
