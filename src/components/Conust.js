import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'


const Conust = () => {
    return (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", pt: 6, pb: 6 }}>
            <Grid item sx={{ p: 4, minWidth: '250px' }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    $3.4B
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                    Valuation
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color='#FF5B50' />

            <Grid item sx={{ p: 4, minWidth: '250px', }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    $2B+
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                    Crypto delivered
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color='#FF5B50' />
            <Grid item sx={{ p: 4, minWidth: '250px', }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    1700%+
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                    Growth
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color='#FF5B50' />
            <Grid item sx={{ p: 4, minWidth: '250px', }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    5M+
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                    Customers
                </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem color='#FF5B50' />
            <Grid item sx={{ p: 4, minWidth: '250px', }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    80+
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                    Assets supported
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Conust