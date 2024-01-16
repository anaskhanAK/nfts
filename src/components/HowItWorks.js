import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'


const HowItWorks = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', fontFamily: 'poppins, sans-serif' }}>
                    <strong> How it <span style={{ color: '#FF5B50' }}>Works</span></strong>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                    <Grid item sx={{ maxWidth: "620px", m: 1 }} data-aos="fade-left">
                        <Card sx={{ backgroundColor: '#151515', boxShadow: '4px 4px 4px 0px #56565640' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'center' }} >
                                    <Grid item sx={{ backgroundColor: "#FF5B50", mr: 2, borderRadius: '14px' }}>
                                        <img src='icon1.png' alt='icon1' style={{ padding: "5px" }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='h6' sx={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}> Connect Your Wallet </Typography>
                                        <Typography variant='subtitle1' sx={{ color: '#BBB7B7', fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}> Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Repudiandae similique corrupti possimus
                                            asperiores epudiandae similique corrupti possimus
                                            asperiores
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "620px", m: 1 }} data-aos="fade-right">
                        <Card sx={{ backgroundColor: '#151515', boxShadow: '4px 4px 4px 0px #56565640' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'center' }} >
                                    <Grid item sx={{ backgroundColor: "#FF5B50", mr: 2, borderRadius: '14px' }}>
                                        <img src='icon2.png' alt='icon2' style={{ padding: "5px" }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='h6' sx={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}> Mint Your NFT </Typography>
                                        <Typography variant='subtitle1' sx={{ color: '#BBB7B7', fontFamily: 'Poppins, sans-serif', }}> Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Repudiandae similique corrupti possimus
                                            asperiores epudiandae similique corrupti possimus
                                            asperiores
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "620px", m: 1 }} data-aos="fade-left">
                        <Card sx={{ backgroundColor: '#151515', boxShadow: '4px 4px 4px 0px #56565640' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'center' }} >
                                    <Grid item sx={{ backgroundColor: "#FF5B50", mr: 2, borderRadius: '14px' }}>
                                        <img src='icon3.png' alt='icon3' style={{ padding: "5px" }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='h6' sx={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}> List NFTs For Sale </Typography>
                                        <Typography variant='subtitle1' sx={{ color: '#BBB7B7', fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}> Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Repudiandae similique corrupti possimus
                                            asperiores epudiandae similique corrupti possimus
                                            asperiores
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "620px", m: 1 }} data-aos="fade-right">
                        <Card sx={{ backgroundColor: '#151515', boxShadow: '4px 4px 4px 0px #56565640' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'center' }} >
                                    <Grid item sx={{ backgroundColor: "#FF5B50", mr: 2, borderRadius: '14px' }}>
                                        <img src='icon4.png' alt='icon4' style={{ padding: "5px" }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='h6' sx={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}> Buy And Sell NFTs </Typography>
                                        <Typography variant='subtitle1' sx={{ color: '#BBB7B7', fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}> Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Repudiandae similique corrupti possimus
                                            asperiores epudiandae similique corrupti possimus
                                            asperiores
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment >
    )
}

export default HowItWorks