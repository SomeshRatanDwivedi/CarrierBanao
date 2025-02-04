import { Brain, LineChart, FileText, MessagesSquare } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Career Coach",
    description: "Receive tailored career guidance and actionable insights with our AI-driven coach.",
  },
  {
    icon: MessagesSquare,
    title: "Mock Interviews",
    description: "Enhance your interview skills with realistic practice sessions and instant feedback.",
  },
  {
    icon: LineChart,
    title: "Market Trends",
    description: "Stay informed with the latest industry trends, salary benchmarks, and market analysis.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional, ATS-friendly resumes effortlessly with AI assistance.",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Powerful Features for Your Career Growth
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;