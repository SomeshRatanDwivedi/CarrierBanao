import { generateAIResponse } from '@/apis';
import JobInsightsDisclaimer from '@/components/JobInsightDisclaimer';
import JobInsightsInfo from '@/components/JobInsightsInfo'
import JobInsightsInputs from '@/components/JobInsightsInputs'
import Loader from '@/components/Loader';
import { InsightsType } from '@/types/component-types';
import { useCallback, useEffect, useRef, useState } from 'react';

const JobInsights = () => {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<InsightsType>({
    marketOutlook: "",
    growthRate: 0,
    demandLevel: "",
    topSkills: [],
    keyTrends: [],
    salaryRanges: []
  });
  const insightsRef = useRef<HTMLDivElement>(null);

  const handleSearch = useCallback(async (industry: string) => {
    setLoading(true);
    try {
      const response = await generateAIResponse(industry);
      setInsights(response);
    } catch (error) {
      console.error("Error generating AI response:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const hasInsightsData = useCallback(() => {
    return (
      insights.marketOutlook !== "" &&
      insights.growthRate !== 0 &&
      insights.demandLevel !== "" &&
      insights.topSkills.length > 0 &&
      insights.keyTrends.length > 0 &&
      insights.salaryRanges.length > 0
    );
  }, [insights.demandLevel, insights.growthRate, insights.keyTrends.length, insights.marketOutlook, insights.salaryRanges.length, insights.topSkills.length]);

  useEffect(() => {
    if (hasInsightsData() && !loading) {
      insightsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hasInsightsData, insights, loading]);

  return (
    <div className='mt-16'>
      <JobInsightsInputs handleSearch={handleSearch} />
      {loading && (
        <div className='flex justify-center items-center h-[663px]'>
          <Loader />
        </div>
      )}
      {(hasInsightsData() && !loading) &&
        <div ref={insightsRef}>
          <JobInsightsInfo insights={insights} />
        </div>
      }
      {
        !loading && !hasInsightsData() &&
        <JobInsightsDisclaimer />
      }
    </div>

  )
}

export default JobInsights