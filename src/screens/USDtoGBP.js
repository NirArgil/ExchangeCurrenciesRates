import React, { useEffect, useState } from "react"
import '../App.css'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { getUSDtoGBP } from "../redux/actions/USDtoGBPActions";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const USDtoGBP = () => {
    let dispatch = useDispatch();

    const USDtoGBPstate = useSelector((state) => ({ ...state.USDtoGBP }));

    useEffect(() => {
        USDtoGBPstate.USDtoGBPdays.length === 0 ?
            dispatch(getUSDtoGBP()) :
            console.log("USDtoGBP already FETCHED");

    }, [dispatch]);

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

    return (
        <div className="chart">
            <Chart type='line' data={chartData} />

            <Button variant="outlined" style={{ textTransform: 'none'}}>
                <Link to="/" style={{ textDecoration: 'none' }}>Back to Home</Link>
            </Button>
        </div>
    )
}