import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import '../App.css'

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import { useDispatch, useSelector } from "react-redux";
import { getUSDtoGBP, setEndDate, setStartDate } from "../redux/actions/USDtoGBPActions";

import moment from "moment";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Button, TextField, Box } from "@mui/material";

export const USDtoGBP = () => {
    let dispatch = useDispatch();

    const USDtoGBPstate = useSelector((state) => ({ ...state.USDtoGBP }));

    const startDATE = USDtoGBPstate.startDate;
    const endDATE = USDtoGBPstate.endDate;

    const START = moment(startDATE).format('YYYY-MM-DD');
    const END = moment(endDATE).format('YYYY-MM-DD');

    const onStartDatesChange = (startDate) => {
        dispatch(setStartDate(startDate))
    }

    const onEndDatesChange = (endDate) => {
        dispatch(setEndDate(endDate))
    }

    const chartData = {
        labels: USDtoGBPstate.USDtoGBPdays,
        datasets: [
            {
                label: "USD to GBP",
                data: USDtoGBPstate.USDtoGBPrates,
                fill: true,
                backgroundColor: "rgba(244,67,54,0.3)",
                borderColor: "rgba(244,67,54,1)"
            },
        ]
    };

    useEffect(() => {
        dispatch(getUSDtoGBP(START, END))

    }, [END]);

    return (
        <div className="chart">
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
            <Button variant="outlined" style={{ textTransform: 'none' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>Back to Home</Link>
            </Button>
        </div>
    )
}