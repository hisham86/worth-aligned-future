
import React from "react";
import { DollarSign, Users, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Salary Negotiation Coaching",
    description: "Learn proven techniques to negotiate higher salaries with confidence. Our strategies have helped clients earn 15-30% more.",
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Interview Preparation",
    description: "Get personalized coaching for technical and behavioral interviews. Practice with industry-specific questions and feedback.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Career Trajectory Planning",
    description: "Map your career path with salary milestones. Understand market rates and position yourself for maximum earning potential.",
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The tools you need for career success
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to advance your career and maximize your earning potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
