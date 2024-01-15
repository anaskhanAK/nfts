import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'


const Utility = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white' }}>
                    <strong> Utility </strong>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', px: 4 }}>
                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    <span style={{ color: '#FF5B50' }}>NFTs offers real-world, game-changing</span> advantages that maximize
                    your investment.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item sx={{ maxWidth: "250px", m: 2, alignItems: 'center' }}>
                        <Card sx={{ backgroundColor: '#151515', borderRadius: '10px', height:'300px'}}>
                            <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                <img src='cardIcon1.png' alt='Revenue' />
                                <Typography variant="body1" gutterBottom sx={{ color: '#FF5B50', my: 2 }}>
                                    Revenue Stream
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'white' }}>
                                    Nftl distributes proceeds
                                    from lottery ticket sales to NFT
                                    holders. NFT rarity determines
                                    holders' income share.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "250px", m: 2, alignItems: 'center' }}>
                        <Card sx={{ backgroundColor: '#151515', borderRadius: '10px', height:'300px' }}>
                            <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                <img src='cardIcon2.png' alt='Staking' />
                                <Typography variant="body1" gutterBottom sx={{ color: '#FF5B50', my: 2 }}>
                                    Staking
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'white' }}>
                                    On Nft's forthcoming DeFi
                                    platform, users will be able to
                                    stake assets in pools and
                                    compete for a variety of prizes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "250px", m: 2, alignItems: 'center' }}>
                        <Card sx={{ backgroundColor: '#151515', borderRadius: '10px', height:'300px' }}>
                            <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                <img src='cardIcon3.png' alt='Token' />
                                <Typography variant="body1" gutterBottom sx={{ color: '#FF5B50', my: 2 }}>
                                    Token
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'white' }}>
                                    The Nft utility token is NLOT.
                                    Each Nft NFT holder receives
                                    10 NLOT everyday.By staking
                                    tokens & earn money.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "250px", m: 2, alignItems: 'center' }}>
                        <Card sx={{ backgroundColor: '#151515', borderRadius: '10px', height:'300px' }}>
                            <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                <img src='cardIcon2.png' alt='Raffle' />
                                <Typography variant="body1" gutterBottom sx={{ color: '#FF5B50', my: 2 }}>
                                    Raffle
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'white' }}>
                                    Raﬄe every month winning
                                    #Genslr NFT holders gets
                                    1000USD (sent via stable
                                    coin)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </React.Fragment >
    )
}

export default Utility