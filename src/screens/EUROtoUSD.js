import React, { useEffect, useState } from "react"
import '../App.css'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { getEUROtoUSD } from "../redux/actions/EUROtoUSDActions";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { DateRangePicker } from "react-dates";
import { setEndDate, setStartDate } from "../redux/actions/datesActions";
import DatePicker from "react-datepicker";
import 'react-dates/initialize';
import "react-datepicker/dist/react-datepicker.css"
import moment from "moment";
// import { DateRangePicker } from '@mui/lab';
import { parseISO } from 'date-fns'
// import { DatePicker, Space } from 'antd';


export const EUROtoUSD = () => {
    // const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    // const [endDate, setEndDate] = useState(new Date("2014/02/18"));

    let dispatch = useDispatch();

    const EUROtoUSDstate = useSelector((state) => ({ ...state.EUROtoUSD }));

    useEffect(() => {
        EUROtoUSDstate.EUROtoUSDdays.length === 0 ?
            dispatch(getEUROtoUSD()) :
            console.log("EUROtoUSD aready FECTHED");

    }, [dispatch]);


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


    const onStartDatesChange = (startDate) => {
        dispatch(setStartDate(startDate))
    }

    const onEndDatesChange = (endDate) => {
        dispatch(setEndDate(endDate))
    }

    const startDATE = useSelector((state) => (state.Dates.startDate));
    const endDATE = useSelector((state) => (state.Dates.endDate));
    const DATES = useSelector((state) => (state.Dates));

    const START = moment(startDATE).format('L');
    const END = moment(endDATE).format('L');
    const d = (new Date(Date.now()));

    // console.log(d);
    // console.log(DATES);
    // console.log(START); 
    // console.log(END);
    // console.log(typeof START);

    return (
        <div className="chart">
            <Chart type='line' data={chartData} />



            <DatePicker
                selected={startDATE}
                onChange={(date) => onStartDatesChange(date)}
                selectsStart
                startDate={startDATE}
                endDate={endDATE}
                dateFormat="yyyy/MM/dd"
            />
            <DatePicker
                selected={endDATE}
                onChange={(date) => onEndDatesChange(date)}
                selectsEnd
                startDate={startDATE}
                endDate={endDATE}
                minDate={startDATE}
                dateFormat="yyyy/MM/dd"
            />

            <Button variant="outlined" style={{ textTransform: 'none' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>Back to Home</Link>
            </Button>
        </div>
    )
}
