import React from 'react';
import { Line } from 'recharts';


const AEU = (start: any, end: any, quantity: any) => {
  const AEUData = [{ date: start.toLocaleString(), quantity: 0 }, { date: end.toLocaleString(), quantity }];

  return <Line data={AEUData} dataKey='quantity' dot={false} isAnimationActive={false} stroke='blue' />;
};

export default AEU;
