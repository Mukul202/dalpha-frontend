import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ListItem } from "@mui/material";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "../../styles/Home.module.css";
import ReadMoreReact from "read-more-react";

export default function Announcement({ cpid, cpname, announcement }) {
  let data = announcement[0];
  return (
    <React.Fragment>
      <Paper sx={{ padding: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h2" component="div" sx={{ color: "#1976d2" }}>
              {cpname}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="div" sx={{ textAlign: "end" }}>
              {cpid}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "end" }}
            >
              {data.date}
            </Typography>
          </Grid>
        </Grid>
        <ReadMoreReact
          className={styles.para_announcements}
          text={data.text}
          min={800}
          ideal={5000}
          max={100000}
          sx={{
            cursor: "pointer",
          }}
        />
        <Box sx={{ marginTop: "20px", padding: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                component="h6"
                className={styles.positive_value}
              >
                {data.positive.toFixed(2)}%
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                component="h6"
                className={styles.negative_value}
              >
                {data.negative.toFixed(2)}%
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  );
}
