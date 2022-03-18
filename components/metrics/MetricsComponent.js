import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styles from '../../styles/Home.module.css';
import { Modal } from '@mui/material';
import { Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid} from 'recharts';
import { useTheme } from '@mui/material/styles';
import Title from '../examples/Title.js';

function createData(time, amount) {
  return { time, amount };
}

export default function MetricsComponent(props) {
    const theme = useTheme();
    const attributesData = props.attributesData
    const keys = Object.keys(attributesData);
    const [open, setOpen] = React.useState(false);
    const [data, setdata] = React.useState('');
    const [key, setkey] = React.useState('');
    const handleOpen = (key) => {
        const maping = (data) => {
            let emptyArray = []
            data.forEach(element => {
                emptyArray.push(createData(element.year, element.quat))
            });
            return emptyArray
        }
        data = maping(attributesData[key])
        setkey(key)
        setdata(data)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const name = {
        'returnonequity': ' Return on Equity',
        'netinventory': ' Net Inventory',
        'liabilities': ' Liabilities',
        'financialleverage': ' Financial Leverage',
        'operatingincome': ' Operating Income',
        'nonoperatingincomeexpense':' Non-Operating Income/Expense',
        'depreciation': ' Depreciation',
        'incometaxesextraordinaryitemsnoncontrollinginterest':"Income Taxes, Extraordinary Items, Non-Controlling Interest",
        'netincomeloss': ' Net Income/Loss'
    }
    return (
        <Grid container spacing={3} style={{ marginTop: "5px" }}>
            {
                keys.map(key => { 
                    if (attributesData[key][0]) {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                            <Paper className={styles.metrics_card} onClick={() => { handleOpen(key) }}>
                                <Typography variant="h6" component="h6" className={styles.metrics_name}>
                                {name[key]}
                            </Typography>
                                <Typography variant="h5" component="h5" className={styles.metrics_value}>
                                {(attributesData[key])[0].quat[0]}
                            </Typography>
                        </Paper>
                    </Grid>
                )
                }
                })
            }
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ width: 400 }} className={styles.model_box}>
                    <Title>{ name[key]}</Title>
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
                        />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Line
                            isAnimationActive={false}
                            type="monotone"
                            dataKey="amount"
                            stroke={theme.palette.primary.main}
                        />
                        </LineChart>
                        </ResponsiveContainer>
                    <Button onClick={handleClose} sx={{marginTop:'30px'}}>Close Plot</Button>
                </Box>
            </Modal>
        </Grid>
    );
}