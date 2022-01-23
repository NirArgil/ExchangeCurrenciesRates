import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import { getEUROtoUSD } from "../redux/actions/EUROtoUSDActions";
import { useDispatch, useSelector } from "react-redux";

import { Button, TextField, Box } from "@mui/material";

import { setEndDate, setStartDate } from "../redux/actions/EUROtoUSDActions";

import moment from "moment";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export const EUROtoUSD = () => {
    const dispatch = useDispatch();

    const EUROtoUSDstate = useSelector((state) => ({ ...state.EUROtoUSD }));
    
    const startDATE = EUROtoUSDstate.startDate;
    const endDATE = EUROtoUSDstate.endDate;

    const START = moment(startDATE).format('YYYY-MM-DD');
    const END = moment(endDATE).format('YYYY-MM-DD');
    // const ENDofDATE = START + 7;

    const onStartDatesChange = (startDate) => {
        dispatch(setStartDate(startDate))
    }

    const onEndDatesChange = (endDate) => {
        dispatch(setEndDate(endDate))
    }

    const chartData = {
        labels: EUROtoUSDstate.EUROtoUSDdays,
        datasets: [
            {
                label: "EURO to USD",
                data: EUROtoUSDstate.EUROtoUSDrates,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.3)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };

    const fetch = () => {
        dispatch(getEUROtoUSD(START, END))
    }

    return (
        <div className="ratesScreen">
            <Chart className="chartComponent" type='line' data={chartData} />

            <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Start"
                        inputFormat="dd/MM/yyyy"
                        value={startDATE}
                        onChange={onStartDatesChange}
                        renderInput={(params) => <TextField {...params} />}
                    />

                    <DesktopDatePicker
                        label="End"
                        inputFormat="dd/MM/yyyy"
                        value={endDATE}
                        onChange={onEndDatesChange}
                        renderInput={(params) => <TextField {...params} />}
                    />

                </LocalizationProvider>


            </Box>
            <Button className="HomeBtn" variant="outlined" style={{ textTransform: 'none' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>Back to Home</Link>
            </Button>

            <Button variant="outlined" color="success" onClick={fetch} style={{ textTransform: 'none' }}>
                Click to Get New Rates
            </Button>
        </div>
    )
}
