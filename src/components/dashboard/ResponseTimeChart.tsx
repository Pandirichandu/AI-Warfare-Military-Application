import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Image Analysis', current: 0.8, target: 0.5 },
  { name: 'Threat Assessment', current: 1.2, target: 1.0 },
  { name: 'Path Finding', current: 1.5, target: 1.0 },
  { name: 'Target ID', current: 0.7, target: 0.5 },
  { name: 'Decision Matrix', current: 1.7, target: 1.5 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 p-3 border border-gray-700 rounded-md shadow-lg">
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="text-accent-teal text-sm">
          Current: {payload[0].value.toFixed(1)}s
        </p>
        <p className="text-accent-yellow text-sm">
          Target: {payload[1].value.toFixed(1)}s
        </p>
      </div>
    );
  }
  return null;
};

const ResponseTimeChart: React.FC = () => {
  return (
    <div className="card h-80">
      <h3 className="text-lg font-semibold mb-4 text-white">Response Time Analysis</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1E3A8A" />
          <XAxis dataKey="name" stroke="#A1A1AA" />
          <YAxis label={{ value: 'Seconds', angle: -90, position: 'insideLeft', fill: '#A1A1AA' }} stroke="#A1A1AA" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="current" fill="#00B8D4" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" fill="#FFD600" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponseTimeChart;