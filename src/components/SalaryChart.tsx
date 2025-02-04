import { SalaryRangesType } from '@/types/component-types';
import { memo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const SalaryChart = ({ data }: { data: SalaryRangesType[] }) => {
  return (
    <div className="glass-card p-6 h-[400px] animate-fade-in">
      <h2 className="text-xl font-bold mb-6">Salary Ranges by Role in (U.S)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="role" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#222', 
              border: '1px solid #444',
              borderRadius: '8px',
            }}
          />
          <Area
            type="monotone"
            dataKey="max"
            stackId="1"
            stroke="#4CAF50"
            fill="#4CAF50"
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="median"
            stackId="1"
            stroke="#2196F3"
            fill="#2196F3"
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="min"
            stackId="1"
            stroke="#FFC107"
            fill="#FFC107"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(SalaryChart);