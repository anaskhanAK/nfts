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
                    <Card sx={{
                        backgroundColor: '#151515', borderRadius: '10px', height: '300px', boxShadow: '4px 4px 4px 0px #5A575740',
                        transition: '1s',
                        ':hover': {
                            transform: 'scale(1.1)',
                            cursor: 'pointer',
                        }
                    }}>
                        <CardContent sx={{ textAlign: 'center', p: 4, alignItems: 'center' }}>
                            <img data-aos="fade-up" src={data.icon} alt='Revenue' width={100} height={90} />
                            <Typography variant="body2" gutterBottom sx={{ color: 'white', my: 2, fontSize: '15px', fontFamily: 'poppins, sans-serif', fontWeight: '300' }}>
                                {data.text}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Grid item sx={{ maxWidth: "280px", m: 3, alignItems: 'center' }}>
                <Card sx={{ backgroundColor: '#151515', borderRadius: '10px', height: '300px', boxShadow: '4px 4px 4px 0px #5A575740' }}>
                    <CardContent sx={{ textAlign: 'center', p: 4, alignItems: 'baseline', }}>
                        <Typography variant="body2" gutterBottom sx={{ color: 'white', my: 2, fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                            STAY UP TO DATE
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', background: '#D9D9D9', border: '1px solid #FFFFFF', borderRadius: '3px' }}>

                            <input
                                type='email'
                                placeholder='E-Mail'
                                style={{
                                    // width: '300px',
                                    height: '32px'
                                    , border: '1px solid #FFFFFF',
                                    background: 'none',
                                    width: '90%',
                                    outline: 'none',
                                    color: '#000000',
                                    fontFamily: 'poppins, sans-serif',
                                    fontWeight: '300'
                                }}
                            />
                            <Button variant='contained' sx={{ backgroundColor: '#FF5B50', }}> <img src='./Vector.png' alt='Vector' /> </Button>

                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TokenCard