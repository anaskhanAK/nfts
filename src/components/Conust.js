import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const Conust = () => {
    return (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", pt: 6, pb: 6 }}>
            <Grid item sx={{ p: 4, minWidth: '250px' }}>
                <Typography gutterBottom
                    data-aos="fade-up"
                    variant="h4"
                    component="div" sx={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '32px' }}>
                    $3.4B
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBB7B7' }}>
                    Valuation
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color='#FF5B50' />

            <Grid item sx={{ p: 4, minWidth: '250px', }}>
                <Typography data-aos="fade-up"
                    gutterBottom variant="h4" component="div" sx={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '32px' }}>
                    $2B+
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBB7B7' }}>
                    Crypto delivered
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color='#FF5B50' />
            <Grid item sx={{ p: 4, minWidth: '250px', }}>
                <Typography
                    data-aos="fade-up"
                    gutterBottom
                    variant="h4" component="div" sx={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '32px' }}>
                    1700%+
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBB7B7' }}>
                    Growth
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color='#FF5B50' />
            <Grid item sx={{ p: 4, minWidth: '250px', }}>
                <Typography
                    data-aos="fade-up"
                    gutterBottom
                    variant="h4" component="div" sx={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '32px' }}>
                    5M+
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBB7B7' }}>
                    Customers
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color='#FF5B50' />
            <Grid item sx={{ p: 4, minWidth: '250px', }}>
                <Typography
                    data-aos="fade-up"
                    gutterBottom
                    variant="h4" component="div" sx={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '32px' }}>
                    80+
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBB7B7' }}>
                    Assets supported
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Conust