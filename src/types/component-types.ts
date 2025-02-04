export type SalaryRangesType={
  role: string,
  min: number,
  max: number,
  median: number,
  location:string
}
export type InsightsType= { 
  marketOutlook: string;
  growthRate: number;
  demandLevel: string;
  topSkills: string[];
  keyTrends: string[];
  salaryRanges: SalaryRangesType[]
}