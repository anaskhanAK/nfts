import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'


const Details = () => {
    document.title = "NFTs - Details"
    return (
        <React.Fragment>
            <Box
                sx={{
                    height: '195px',
                    backgroundImage: 'url(heading.png)',
                    opacity: 'inherit',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3" gutterBottom sx={{ color: 'white', backgroundColor: '#FF5B5080', p: 1 }}>
                    <strong>Item Details</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4, }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', p: 2 }}>
                    <span style={{ color: '#FF5B50' }}>Discover</span> NFT in Details
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', mt:3 }}>
                    <img src='nftcard.png' alt='card' style={{maxWidth:'500px', maxHeight:'300px' }} />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper sx={{
                        backgroundColor: '#151515',
                        p: 2,
                        m: 2,
                        mx:6
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '50%' }}>
                                <Typography variant='h6' sx={{ color: 'white', mx: 3 }}> astronauta 1 NFT</Typography>
                            </Box>
                            <Box sx={{ width: '50%', textAlign: 'end' }}>
                                <IconButton>
                                    <img src='theameArrow.png' alt='icon' style={{ width: '35px' }} />
                                </IconButton>
                            </Box>
                        </Box>
                        <Typography variant='subtitle1' sx={{ color: '#FFFFFF', mx: 3 }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore distinctio at nobis saepe, molestiae a, dicta similique.
                        </Typography>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', }}>
                            <Grid item sx={{ maxWidth: '410px', display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='userIcon.png' alt='userIcon' />
                                </Box>
                                <Box sx={{ width: '200px', p: 1, color: 'white' }}>
                                    <Typography variant="body" gutterBottom>
                                        <strong>Item Owner</strong>
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                        0xebFff...0cA3f0C
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item sx={{ maxWidth: '410px', display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='collectbileIcon.png' alt='userIcon' />
                                </Box>
                                <Box sx={{ width: '200px', p: 1, color: 'white' }}>
                                    <Typography variant="body" gutterBottom>
                                        <strong>NFT Asset Size</strong>
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                        300x300
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item sx={{ maxWidth: '410px', display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='assetIcon.png' alt='userIcon' />
                                </Box>
                                <Box sx={{ width: '200px', p: 1, color: 'white' }}>
                                    <Typography variant="body" gutterBottom>
                                        <strong>Item Category</strong>
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                        Collectibles
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item sx={{ maxWidth: '410px', display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='creationDateIcon.png' alt='userIcon' />
                                </Box>
                                <Box sx={{ width: '200px', p: 1, color: 'white' }}>
                                    <Typography variant="body" gutterBottom>
                                        <strong>Creation Date</strong>
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                        04 April 2022
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Typography variant="body" gutterBottom sx={{ color: 'white', m: 3 }}>
                            <strong>Item Price</strong>
                        </Typography>
                        <Box sx={{ m: 3, border: '1px solid #FF5B50', p: 2, display: 'flex' }}>
                            <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src='dollarIcon.png' alt='userIcon' />
                            </Box>
                            <Box sx={{ p: 1, color: 'white' }}>
                                <Typography variant="body" gutterBottom>
                                    <strong>Current NFT Price</strong>
                                </Typography>
                                <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                    0.032 ETH Or Price Not Set Yet!
                                </Typography>
                            </Box>

                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Details