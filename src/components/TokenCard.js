import React from 'react'
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'


const data = [
    {
        icon: "token1.png",
        text: "Accrue value through utility, not hyperinflation"
    },
    {
        icon: "token2.png",
        text: "Fuel GENSLR’’s ecosystem of utility through a secondary token"
    },
    {
        icon: "token3.png",
        text: "A new take on token utility in the analytics space"
    },
    {
        icon: "token4.png",
        text: "Airdrop to GENSLR loyal users that have joined its journey over the past year"
    },
    {
        icon: "token5.png",
        text: "Key supporters get rewarded as GENSLR use grows"
    },
    {
        icon: "token6.png",
        text: "Long-term lockups that are only meant for long-term believers"
    },
    {
        icon: "token7.png",
        text: "Specialised governance power over GENSLR for core believers"
    },
]

const TokenCard = () => {
    return (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {data.map((data, index) => (
                <Grid item sx={{ maxWidth: "280px", m: 3, alignItems: 'center' }} key={index}>
                    <Card sx={{ backgroundColor: '#151515', borderRadius: '10px', height: '300px' }}>
                        <CardContent sx={{ textAlign: 'center', p: 4, alignItems: 'center' }}>
                            <img src={data.icon} alt='Revenue' width={100} />
                            <Typography variant="body2" gutterBottom sx={{ color: 'white', my: 2 }}>
                                {data.text}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Grid item sx={{ maxWidth: "280px", m: 3, alignItems: 'center' }}>
                <Card sx={{ backgroundColor: '#151515', borderRadius: '10px', height: '300px' }}>
                    <CardContent sx={{ textAlign: 'center', p: 4, alignItems:'center' }}>
                        <Typography variant="body2" gutterBottom sx={{ color: 'white', my: 2 }}>
                            STAY UP TO DATE
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                            <input
                                type='email'
                                placeholder='eMail'
                                style={{
                                    width: '300px',
                                    height: '32px'
                                }}
                            />
                            <Button variant='contained' sx={{backgroundColor:'#FF5B50'}}> send </Button>

                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TokenCard