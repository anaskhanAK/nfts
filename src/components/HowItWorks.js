import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'


const HowItWorks = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white' }}>
                    <strong> How it <span style={{ color: '#FF5B50' }}>Works</span></strong>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                        <Card sx={{ backgroundColor: '#151515' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid container sx={{ display: 'flex' }} >
                                    <Grid item sx={{ backgroundColor: "#FF5B50", mr: 2, borderRadius: '14px' }}>
                                        <img src='icon1.png' alt='icon1' style={{ padding: "5px" }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='h6' sx={{ color: 'white' }}> Connect Your Wallet </Typography>
                                        <Typography variant='subtitle1' sx={{ color: 'white' }}> Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Repudiandae similique corrupti possimus
                                            asperiores epudiandae similique corrupti possimus
                                            asperiores
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                        <Card sx={{ backgroundColor: '#151515' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid container sx={{ display: 'flex' }} >
                                    <Grid item sx={{ backgroundColor: "#FF5B50", mr: 2, borderRadius: '14px' }}>
                                        <img src='icon2.png' alt='icon2' style={{ padding: "5px" }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='h6' sx={{ color: 'white' }}> Mint Your NFT </Typography>
                                        <Typography variant='subtitle1' sx={{ color: 'white' }}> Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Repudiandae similique corrupti possimus
                                            asperiores epudiandae similique corrupti possimus
                                            asperiores
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                        <Card sx={{ backgroundColor: '#151515' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid container sx={{ display: 'flex' }} >
                                    <Grid item sx={{ backgroundColor: "#FF5B50", mr: 2, borderRadius: '14px' }}>
                                        <img src='icon3.png' alt='icon3' style={{ padding: "5px" }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='h6' sx={{ color: 'white' }}> List NFTs For Sale </Typography>
                                        <Typography variant='subtitle1' sx={{ color: 'white' }}> Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Repudiandae similique corrupti possimus
                                            asperiores epudiandae similique corrupti possimus
                                            asperiores
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                        <Card sx={{ backgroundColor: '#151515' }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid container sx={{ display: 'flex' }} >
                                    <Grid item sx={{ backgroundColor: "#FF5B50", mr: 2, borderRadius: '14px' }}>
                                        <img src='icon4.png' alt='icon4' style={{ padding: "5px" }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='h6' sx={{ color: 'white' }}> Buy And Sell NFTs </Typography>
                                        <Typography variant='subtitle1' sx={{ color: 'white' }}> Lorem ipsum dolor, sit amet consectetur adipisicing
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
        </React.Fragment>
    )
}

export default HowItWorks