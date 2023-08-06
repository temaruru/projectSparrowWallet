import React from 'react';
import {Area, AreaChart} from 'recharts';

export const Chart = ({ data, color, id, chartWidth }) => {

  return (
    <AreaChart
      width={chartWidth ? 100 : 205}
      height={40}
      data={data}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id={`value${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.5} />
          <stop offset="95%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="value"
        stroke={color}
        fillOpacity={1}
        fill={`url(#value${id})`}
      />
    </AreaChart>
  );
};
