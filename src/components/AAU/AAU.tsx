import React from 'react';
import { Line } from 'recharts';
import { Interval } from 'luxon';
import APU from '../APU/APU';

const AAU = (start: any, end: any, quantity: any, apu: any) => {
  const AAUData = [{ date: start.toLocaleString(), quantity: 0 }];
  const interval = Interval.fromDateTimes(start, end);
  const length = interval.length('days');

  for (let i = 1; i <= length; i += 1) {
    AAUData[i] = { date: start.plus({ days: i }).toLocaleString(), quantity: quantity / length * i };
  }
  const APULines = apu.map((item: any) => {
    const lines = APU(item.start, item.end, item.quantity, item.aeu);
    return lines;
  });
  return [<Line data={AAUData} dataKey='quantity' dot={false} isAnimationActive={false} stroke='green' />, ...APULines];
};

export default AAU;

