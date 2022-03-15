import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, CartesianGrid} from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data1 = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

// const data2 = require("../../data/testData.json")
// console.log(data2)

let data3 = [
  {
                "from": {
                    "$date": {
                        "$numberLong": "1585699200000"
                    }
                },
                "to": {
                    "$date": {
                        "$numberLong": "1617148800000"
                    }
                },
                "value": {
                    "$numberDouble": "-452000"
                }
            }, {
                "from": {
                    "$date": {
                        "$numberLong": "1554076800000"
                    }
                },
                "to": {
                    "$date": {
                        "$numberLong": "1585612800000"
                    }
                },
                "value": {
                    "$numberDouble": "0"
                }
            }, {
                "from": {
                    "$date": {
                        "$numberLong": "1522540800000"
                    }
                },
                "to": {
                    "$date": {
                        "$numberLong": "1553990400000"
                    }
                },
                "value": {
                    "$numberDouble": "-431000"
                }
            }
]

data3 = data3.map(element => {
  // element.from = new Date(element.from.$date.$numberLong).toString()
  element.to = new Date(element.to.$date.$numberLong).toString()
  // (new Date(n)).toString()
  element.value = element.value.$numberDouble
  return createData(element.to, element.value)
});

console.log(data3)


export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data1}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            // dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}