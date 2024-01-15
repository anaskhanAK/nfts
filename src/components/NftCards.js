import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const cardStyle = {
    padding: '15px',
    color: 'black',
    backgroundColor: '#151515',
    margin: '10px',
    overflow: 'hidden',
    cursor: 'pointer'

};

const NftCards = ({ size }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/details');
    };
    return (
        <div>
            <Grid container spacing={2} sx={{ p: 5 }}>
                {Array.from({ length: size }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper style={cardStyle} onClick={handleCardClick}>
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
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default NftCards;
