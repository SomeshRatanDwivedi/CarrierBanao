import { ReactNode } from 'react';
import { Progress } from '@/components/ui/progress';

interface InsightCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
}

const InsightCard = ({ title, value,icon}: InsightCardProps) => {

  const getDemandLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div className="metric-card animate-fade-in hover:transform hover:rotate-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm text-gray-400">{title}</h3>
        {icon && <span className="text-gray-400">{icon}</span>}
      </div>
      <div className="flex items-baseline gap-2">
        <h2 className="text-3xl font-bold">{value + (title === 'Industry Growth'?'%':'')}</h2>
      </div>
      {title === 'Industry Growth' && <Progress value={+value} className="mt-4 h-2" />}
      {title === 'Demand Level' && (
        
          <div
            className={`h-2 w-full rounded-full mt-4 ${getDemandLevelColor(
              value+''
            )}`}
          />
      )}
    </div>
  );
};

export default InsightCard;