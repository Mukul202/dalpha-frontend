import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function MetricsComponent() {
    return (
        <Grid container spacing={3} style={{marginTop: "5px"}}>
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} style={{textAlign: "center", padding: "30px 25px",}}>
                    <Typography variant="h4" component="h4">
                        50.345 %
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Metric 1
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} style={{textAlign: "center", padding: "30px 25px",}}>
                    <Typography variant="h4" component="h4">
                        50.345 %
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Metric 1
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} style={{textAlign: "center", padding: "30px 25px",}}>
                    <Typography variant="h4" component="h4">
                        50.345 %
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Metric 1
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} style={{textAlign: "center", padding: "30px 25px",}}>
                    <Typography variant="h4" component="h4">
                        50.345 %
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Metric 1
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}