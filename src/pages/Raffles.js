import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const cardStyle = {
    padding: '15px',
    color: 'black',
    backgroundColor: '#151515',
    margin: '10px',
    overflow: 'hidden',
    cursor: 'pointer'

};

const Raffles = () => {
    document.title = "NFTs - Raffles"
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
                    <strong>Raffles</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', px: 2, pt: 2 }}>
                    <span style={{ color: '#FF5B50' }}>NFT</span> Raffles
                </Typography>
                <Typography variant='h6' sx={{ px: 2, color: 'white' }}>
                    NFT Raffles curates non fungible tokens as raffles for non profits, artists and collectors.
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ p: 5 }}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper style={cardStyle}>
                            <img src='nftcard.png' alt='card' style={{ width: "100%" }} />
                            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                                Nft 1
                            </Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ width: '50%' }}>
                                    <Typography variant="subtitle" gutterBottom sx={{ color: 'white' }}>
                                        Auction time
                                    </Typography>

                                </Box>
                                <Box sx={{ width: '50%', textAlign: 'end' }}>
                                    <Typography variant="subtitle" gutterBottom sx={{ color: 'white' }}>
                                        Current Bid
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ width: '50%' }}>
                                    <Typography variant="subtitle" gutterBottom sx={{ color: 'white' }}>
                                        3h 1m 50s
                                    </Typography>

                                </Box>
                                <Box sx={{ width: '50%', textAlign: 'end' }}>
                                    <Typography variant="subtitle" gutterBottom sx={{ color: '#FF5B50' }}>
                                        0.15 ETH
                                    </Typography>
                                </Box>
                            </Box>
                            <Button sx={{width:'100%', my:2, backgroundColor:'#FF5B50'}} variant='contained'>Place a Bid</Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default Raffles