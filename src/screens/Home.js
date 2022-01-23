import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const Home = () => {
    return (
        <div className="homescreen">
            <header className="App-header">
                <h1>Exchange Currencies Rates</h1>
                <h4>By Nir Argil</h4>
            </header>

            <Stack spacing={2} direction="row" justifyContent="center">

                <Button variant="outlined" style={{ textTransform: 'none' }}>
                    <Link to="EUROtoUSD" style={{ textDecoration: 'none' }}>EUROtoUSD</Link>
                </Button>

                <Button variant="outlined" style={{ textTransform: 'none' }}>
                    <Link to="USDtoGBP" style={{ textDecoration: 'none' }}>USDtoGBP</Link>
                </Button>
            </Stack>
        </div>
    )
}

