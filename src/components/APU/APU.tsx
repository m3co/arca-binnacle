import React from 'react';
import { Line } from 'recharts';
import { Interval } from 'luxon';
import AEU from '../AEU/AEU';

const APU = (start: any, end: any, quantity: any, aeu: any) => {
  const APUData = [{ date: start.toLocaleString(), quantity: 0 }, { date: end.toLocaleString(), quantity }];
  const interval = Interval.fromDateTimes(start, end);
  const length = interval.length('days');

  for (let i = 1; i <= length; i += 1) {
    APUData[i] = { date: start.plus({ days: i }).toLocaleString(), quantity: quantity / length * i };
  }
  const AEULines = aeu.map((item: any) => {
    const lines = AEU(item.start, item.end, item.quantity);
    return lines;
  });
  return [<Line data={APUData} dataKey='quantity' dot={false} isAnimationActive={false} stroke='red' />, ...AEULines];
};

export default APU;
