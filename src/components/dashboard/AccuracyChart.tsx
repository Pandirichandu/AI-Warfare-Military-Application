import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Q1 2024', value: 92 },
  { name: 'Q2 2024', value: 94 },
  { name: 'Q3 2024', value: 95 },
  { name: 'Q4 2024', value: 96.5 },
  { name: 'Q1 2025', value: 97.2 },
  { name: 'Q2 2025', value: 98.1 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 p-3 border border-gray-700 rounded-md shadow-lg">
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="text-accent-teal text-sm font-semibold">
          Accuracy: {payload[0].value.toFixed(1)}%
        </p>
      </div>
    );
  }
  return null;
};

const AccuracyChart: React.FC = () => {
  return (
    <div className="card h-80">
      <h3 className="text-lg font-semibold mb-4 text-white">Target Identification Accuracy</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00B8D4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00B8D4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1E3A8A" />
          <XAxis dataKey="name" stroke="#A1A1AA" />
          <YAxis domain={[90, 100]} stroke="#A1A1AA" />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#00B8D4" 
            fillOpacity={1} 
            fill="url(#colorAccuracy)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccuracyChart;