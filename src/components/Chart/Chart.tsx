import React from 'react';
import {
  LineChart, XAxis, YAxis, Label,
} from 'recharts';
import { DateTime } from 'luxon';
import AAU from '../AAU/AAU';
import APU from '../APU/APU';
import AEU from '../AEU/AEU';

function Chart() {
  return (
    <LineChart
      width={1200}
      height={500}
    >
      <XAxis dataKey='date' type='category' allowDuplicatedCategory={false}>
        <Label value='Days' offset={0} position='insideBottom' />
      </XAxis>
      <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
      {AAU(DateTime.fromISO('2017-02-13T11:30:00'), DateTime.fromISO('2017-03-13'), 60)}
      {APU(DateTime.fromISO('2017-02-15'), DateTime.fromISO('2017-02-25'), 40)}
      {AEU(DateTime.fromISO('2017-02-16'), DateTime.fromISO('2017-02-17'), 10)}
      {AEU(DateTime.fromISO('2017-02-17'), DateTime.fromISO('2017-02-18'), 15)}
      {AEU(DateTime.fromISO('2017-02-19'), DateTime.fromISO('2017-02-19T12:00:00'), 10)}

    </LineChart>
  );
}

export default Chart;
