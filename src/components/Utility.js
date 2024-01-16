import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'


const Utility = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '600', fontSize: '48px' }}>
                    <strong> Utility </strong>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', px: 4 }}>
                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', textAlign: 'center', fontFamily: 'poppins, sans-serif', fontWeight: '300' }}>
                    <span style={{ color: '#FF5B50' }}>NFTs offers real-world, game-changing</span> advantages that maximize
                    your investment.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item sx={{ maxWidth: "250px", m: 2, alignItems: 'center' }}>
                        <Card
                            sx={{
                                backgroundColor: '#151515',
                                transition: '1s',
                                borderRadius: '10px',
                                height: '300px',
                                boxShadow: '4px 4px 4px 0px #56565640',
                                ':hover': {
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                    border: '1px solid #FF5B50',
                                    // backgroundColor: '#FF5B50',
                                    color: 'white',
                                },
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                <img src='cardIcon1.png' alt='Revenue' />
                                <Typography variant="body1" gutterBottom sx={{ color: '#FF5B50', my: 2, fontFamily: 'poppins, sans-serif', fontWeight: '500', }}>
                                    Revenue Stream
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '300', fontSize: '12px' }}>
                                    Nftl distributes proceeds
                                    from lottery ticket sales to NFT
                                    holders. NFT rarity determines
                                    holders' income share.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "250px", m: 2, alignItems: 'center' }}>
                        <Card
                            sx={{
                                backgroundColor: '#151515',
                                transition: '1s',
                                borderRadius: '10px',
                                height: '300px',
                                boxShadow: '4px 4px 4px 0px #56565640',
                                ':hover': {
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                    border: '1px solid #FF5B50',
                                    // backgroundColor: '#FF5B50',
                                    color: 'white',
                                },
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                <img src='cardIcon2.png' alt='Staking' />
                                <Typography variant="body1" gutterBottom sx={{ color: '#FF5B50', my: 2, fontFamily: 'poppins, sans-serif', fontWeight: '500' }}>
                                    Staking
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '300', fontSize: '12px' }}>
                                    On Nft's forthcoming DeFi
                                    platform, users will be able to
                                    stake assets in pools and
                                    compete for a variety of prizes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "250px", m: 2, alignItems: 'center' }}>
                        <Card
                            sx={{
                                backgroundColor: '#151515',
                                transition: '1s',
                                borderRadius: '10px',
                                height: '300px',
                                boxShadow: '4px 4px 4px 0px #56565640',
                                ':hover': {
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                    border: '1px solid #FF5B50',
                                    // backgroundColor: '#FF5B50',
                                    color: 'white',
                                },
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                <img src='cardIcon3.png' alt='Token' />
                                <Typography variant="body1" gutterBottom sx={{ color: '#FF5B50', my: 2, fontFamily: 'poppins, sans-serif', fontWeight: '500' }}>
                                    Token
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '300', fontSize: '12px' }}>
                                    The Nft utility token is NLOT.
                                    Each Nft NFT holder receives
                                    10 NLOT everyday.By staking
                                    tokens & earn money.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sx={{ maxWidth: "250px", m: 2, alignItems: 'center' }}>
                        <Card
                            sx={{
                                backgroundColor: '#151515',
                                transition: '1s',
                                borderRadius: '10px',
                                height: '300px',
                                boxShadow: '4px 4px 4px 0px #56565640',
                                ':hover': {
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                    border: '1px solid #FF5B50',
                                    // backgroundColor: '#FF5B50',
                                    color: 'white',
                                },
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                <img src='cardIcon2.png' alt='Raffle' />
                                <Typography variant="body1" gutterBottom sx={{ color: '#FF5B50', my: 2, fontFamily: 'poppins, sans-serif', fontWeight: '500' }}>
                                    Raffle
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ color: 'white', fontSize: '12px', fontFamily: 'poppins, sans-serif', fontWeight: '300' }}>
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