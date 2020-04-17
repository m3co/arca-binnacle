import React from 'react';
import {
  LineChart, XAxis, YAxis, Label,
} from 'recharts';
import { DateTime } from 'luxon';
import AAU from '../AAU/AAU';
import APU from '../APU/APU';
import AEU from '../AEU/AEU';

const AAUArr = [
  {
    start: DateTime.fromISO('2017-02-13'),
    end: DateTime.fromISO('2017-03-13'),
    quantity: 60,
    APUArr: [
      {
        start: DateTime.fromISO('2017-02-15'),
        end: DateTime.fromISO('2017-02-25'),
        quantity: 40,
        AEUArr: [
          {
            start: DateTime.fromISO('2017-02-16'),
            end: DateTime.fromISO('2017-02-17'),
            quantity: 10,
          },
          {
            start: DateTime.fromISO('2017-02-17'),
            end: DateTime.fromISO('2017-02-18'),
            quantity: 15,
          },
          {
            start: DateTime.fromISO('2017-02-18'),
            end: DateTime.fromISO('2017-02-19'),
            quantity: 15,
          },
        ],
      },
      {
        start: DateTime.fromISO('2017-02-27'),
        end: DateTime.fromISO('2017-03-10'),
        quantity: 20,
        AEUArr: [
          {
            start: DateTime.fromISO('2017-03-01'),
            end: DateTime.fromISO('2017-03-02'),
            quantity: 5,
          },
          {
            start: DateTime.fromISO('2017-03-02'),
            end: DateTime.fromISO('2017-03-03'),
            quantity: 5,
          },
          {
            start: DateTime.fromISO('2017-03-03'),
            end: DateTime.fromISO('2017-03-04'),
            quantity: 10,
          },
        ],
      },
    ],
  },
  {},
];

const AAU1 = {
  start: DateTime.fromISO('2017-02-13'),
  end: DateTime.fromISO('2017-03-13'),
  quantity: 60,
  apu: [
    {
      start: DateTime.fromISO('2017-02-15'),
      end: DateTime.fromISO('2017-02-25'),
      quantity: 40,
      aeu: [
        {
          start: DateTime.fromISO('2017-02-16'),
          end: DateTime.fromISO('2017-02-17'),
          quantity: 20,
        },
        {
          start: DateTime.fromISO('2017-02-17'),
          end: DateTime.fromISO('2017-02-18'),
          quantity: 20,
        },
      ],
    },
    {
      start: DateTime.fromISO('2017-02-27'),
      end: DateTime.fromISO('2017-03-05'),
      quantity: 20,
      aeu: [
        {
          start: DateTime.fromISO('2017-03-01'),
          end: DateTime.fromISO('2017-03-02'),
          quantity: 5,
        },
        {
          start: DateTime.fromISO('2017-03-03'),
          end: DateTime.fromISO('2017-03-04'),
          quantity: 15,
        },
      ],
    },
  ],
};

const AAU2 = {
  start: DateTime.fromISO('2017-03-13'),
  end: DateTime.fromISO('2017-04-13'),
  quantity: 60,
  apu: [
    {
      start: DateTime.fromISO('2017-03-15'),
      end: DateTime.fromISO('2017-03-25'),
      quantity: 40,
      aeu: [
        {
          start: DateTime.fromISO('2017-03-16'),
          end: DateTime.fromISO('2017-03-17'),
          quantity: 20,
        },
        {
          start: DateTime.fromISO('2017-03-17'),
          end: DateTime.fromISO('2017-03-18'),
          quantity: 20,
        },
      ],
    },
    {
      start: DateTime.fromISO('2017-03-27'),
      end: DateTime.fromISO('2017-04-05'),
      quantity: 20,
      aeu: [
        {
          start: DateTime.fromISO('2017-04-01'),
          end: DateTime.fromISO('2017-04-02'),
          quantity: 5,
        },
        {
          start: DateTime.fromISO('2017-04-03'),
          end: DateTime.fromISO('2017-04-04'),
          quantity: 15,
        },
      ],
    },
  ],
};

const arr = [AAU1, AAU2];

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
      {/* {AAU(AAU1.start, AAU1.end, AAU1.quantity, AAU1.apu)} */}
      {/* {APU(DateTime.fromISO('2017-02-15'), DateTime.fromISO('2017-02-25'), 40)}
      {AEU(DateTime.fromISO('2017-02-16'), DateTime.fromISO('2017-02-17'), 10)}
      {AEU(DateTime.fromISO('2017-02-17'), DateTime.fromISO('2017-02-18'), 15)}
      {AEU(DateTime.fromISO('2017-02-19'), DateTime.fromISO('2017-02-19'), 15)} */}
      {arr.map(item => {
        const lines = AAU(item.start, item.end, item.quantity, item.apu);
        return lines;
      })}
    </LineChart>
  );
}



export default Chart;
