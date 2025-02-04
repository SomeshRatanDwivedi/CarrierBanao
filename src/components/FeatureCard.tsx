import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-gray-800 bg-black/40 backdrop-blur-sm hover:bg-black/60 duration-300 cursor-pointer hover:transform hover:rotate-6">
      <div className="w-12 h-12 mb-4 text-white">
        <Icon className="w-full h-full" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;