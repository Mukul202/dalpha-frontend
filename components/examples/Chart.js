import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, CartesianGrid} from 'recharts';
import Title from './Title';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

export default function Chart({importIng}) {
  const theme = useTheme();
  let data = importIng
  if (data[0].quat.length > 1) {
    let years = data.map(element => {
      return element.year
    });
    const maping = (value) => {
      let internalData = data.filter(element => element.year === value)[0].quat
      let data =[]
      for (let index = 0; index < internalData.length; index++) {
        if (internalData[index].quat === false) { 
          data[index] = createData(`Qtr-${index+1}`, undefined)
        } else {
          data[index] = createData(`Qtr-${index+1}`, internalData[index])
        }
      }
      return data
    }
    const [year, setyear] = React.useState('');
    const [data, setdata] = React.useState(maping(data[0].year));
    const handleChange = (event) => {
      let value = event.target.value;
      setdata(maping(value));
      setyear(value);
    };
    return(
      <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Title item xs={2}>Ploting</Title>
        </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Year"
            onChange={handleChange}
            >
              {years.map(year => { 
                return <MenuItem key={year} value={year}>{year}</MenuItem>
              })}
          </Select>
        </FormControl>
        </Grid>
    </Grid>
      <ResponsiveContainer>
        <LineChart
          data={data}
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
          />
        </LineChart>
        </ResponsiveContainer>
    </React.Fragment>
    )
  } else {
    let data = data.map(data => { 
      return [data.year, data.quat[0] ]})
    const maping = () => {
      for (let index = 0; index < data.length; index++) {
        data[index] = createData(data[index][0], data[index][1])
      }
      return data
    }
    data = maping()
    return (
      <React.Fragment>
        <Title item xs={2}>Ploting</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
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
          />
        </LineChart>
        </ResponsiveContainer>
    </React.Fragment>
    )
  }
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/api/v1/returnonequity?id=1459417');
  const data = await res.json();
  console.log(data)
  return {
    props: {
      importIng : data
    }
  }
}
