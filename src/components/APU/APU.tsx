import React from 'react';
import { Line } from 'recharts';
import { Interval } from 'luxon';

const APU = (start: any, end: any, quantity: any) => {
  const APUData = [{ date: start.toLocaleString(), quantity: 0 }, { date: end.toLocaleString(), quantity }];
  const interval = Interval.fromDateTimes(start, end);
  const length = interval.length('days');

  for (let i = 1; i <= length; i += 1) {
    APUData[i] = { date: start.plus({ days: i }).toLocaleString(), quantity: quantity / length * i };
  }
  return <Line data={APUData} dataKey='quantity' dot={false} isAnimationActive={false} stroke='red' />;
};

export default APU;
