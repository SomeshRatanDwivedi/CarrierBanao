import { UserGroupIcon } from '@heroicons/react/24/outline'
import {
  ChartBarIcon,
  LineChart,
  TrendingUp,
  TrendingDown
} from 'lucide-react'
import InsightCard from './InsightCard'
import SalaryChart from './SalaryChart'
import SkillBadge from './SkillBadge'
import { InsightsType } from '@/types/component-types'

const JobInsightsInfo = ({insights }: { insights: InsightsType }) => {
  const { topSkills, keyTrends } = insights;
  const getMarketOutlookInfo = (outlook: string) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };
  const { icon: OutlookIcon, color: outlookColor } = getMarketOutlookInfo(insights.marketOutlook)
  return (
    <div className="px-8 pt-4 pb-8">
      <header className="mb-8 animate-fade-in mt-8">
        <h1 className="text-4xl font-bold mb-2">Industry Insights</h1>
        <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <InsightCard
          title="Market Outlook"
          value={insights.marketOutlook}
          icon={<OutlookIcon className={`w-6 h-6 ${outlookColor}`} />}
        />
        <InsightCard
          title="Industry Growth"
          value={insights.growthRate}
          icon={<ChartBarIcon className="w-6 h-6" />}
        />
        <InsightCard
          title="Demand Level"
          value={insights.demandLevel}
          icon={<UserGroupIcon className="w-6 h-6" />}
        />
        <div className="metric-card animate-fade-in">
          <h3 className="text-sm text-gray-400 mb-4">Top Skills / Key Trends</h3>
          <div className="flex flex-wrap gap-2 max-h-[100px] overflow-y-auto">
            {topSkills.slice(0,4).map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
            {keyTrends.filter(ele => !topSkills.includes(ele)).slice(0,4).map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>

      <SalaryChart data={insights.salaryRanges} />
    </div>
  )
}

export default JobInsightsInfo