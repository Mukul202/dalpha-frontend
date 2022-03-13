import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import AddChartIcon from '@mui/icons-material/Addchart';

import Link from 'next/link';



export function MainListItems(props) {
    const { cpid, activeMenu } = props;
    const activeStyle = {
        backgroundColor: "#c1c8d9"
    };
    return (
        <React.Fragment>
            <Link href={`/${cpid}/company_info`}>
            <ListItemButton style={activeMenu == "company_info" ? activeStyle : {}}>
            <ListItemIcon>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Company Info" />
            </ListItemButton></Link>
            
            <Link href={`/${cpid}/company_metrics`}>
            <ListItemButton style={activeMenu == "company_metrics" ? activeStyle : {}}>
            <ListItemIcon>
                <AddChartIcon />
            </ListItemIcon>
            <ListItemText primary="Company Metrics" />
            </ListItemButton></Link>

            <Link href={`/${cpid}/company_finances`}>
            <ListItemButton style={activeMenu == "company_finances" ? activeStyle : {}}>
            <ListItemIcon>
                <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Finances" />
            </ListItemButton></Link>

            <Link href={`/${cpid}/company_accounts`}>
            <ListItemButton style={activeMenu == "company_accounts" ? activeStyle : {}}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Accounts" />
            </ListItemButton></Link>
            
        </React.Fragment>
    );
}

export function SecondaryListItems(props) {
    const { cpid } = props;
    return (
        <React.Fragment>
            <ListSubheader component="div" inset>
            Saved reports
            </ListSubheader>
            <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
            </ListItemButton>
        </React.Fragment>
    );
}