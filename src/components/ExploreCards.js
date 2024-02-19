import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FetchingDataFromApi } from '../utils/Api';

const cardStyle = {
    padding: '35px 15px 35px 15px',
    borderRadius: '10px',
    color: 'black',
    backgroundColor: '#151515',
    margin: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '4px 4px 4px 0px #5A575740'
};

const ExploreCards = ({ size, limit }) => {
    const navigate = useNavigate();
    const [nftData, setNftData] = useState([]);

    const handleCardClick = (id) => {
        const selectedNft = nftData.find(item => item.id === id);
        navigate(`/${id}`, { state: { selectedNft } });
    };

    const fetchData = async () => {
        try {
            const response = await FetchingDataFromApi('/nft/other');
            setNftData(response.data.nft);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>

            {nftData.length > 0 ?
                (
                    <Grid container sx={{ p: 0 }}>
                        {nftData.slice(0, 4).map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Paper style={cardStyle} onClick={() => handleCardClick(item.id)}
                                    sx={{ py: 4, ':hover': { border: '1px solid #FF5B50' } }}>
                                    <img src={"./nft-pic.png"} alt={item.name} style={{ width: "100%", borderRadius: '10px' }} />
                                    <Typography variant="h6" gutterBottom sx={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '700', mt: 2 }}>
                                        {item.name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="subtitle" gutterBottom sx={{ color: 'white' }}>
                                                Auction time
                                            </Typography>
                                            <Typography variant="subtitle" gutterBottom sx={{ color: '#FF5B50' }}>
                                                {new Date(item.auctionTime).toLocaleString()}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: '100%', textAlign: 'start' }}>
                                            <Typography variant="subtitle" gutterBottom sx={{ color: 'white', mr: 1, fontFamily: 'Poppins, sans-serif', fontWeight: '300' }}>
                                                Current Bid
                                            </Typography>
                                            <Typography variant="subtitle" gutterBottom sx={{ color: '#FF5B50' }}>
                                                {item.currentBid} ETH
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                ) :
                (
                    <Box data-aos="zoom-in" sx={{
                        display: 'flex', justifyContent: 'center', py: 10,
                    }}>
                        <Paper
                            sx={{
                                p: 2,
                                backgroundColor: '#151515',
                                maxWidth: '600px',
                                textAlign: 'center',
                                m: 2,
                                border: '1px solid #5A5757',
                                boxShadow: '4px 4px 4px 0px #56565640'

                            }}
                        >
                            <Typography variant='h6' gutterBottom sx={{ color: '#FF5B50', fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                                No item listed for sale yet
                            </Typography>
                            <img src='warning.png' alt='warning' />
                            <Typography variant='body1' gutterBottom sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '400' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique accusantium quae natus odio est ullam ab. Ea iusto corrupti.!F
                            </Typography>
                        </Paper>
                    </Box>
                )
            }

        </div>
    );
};

export default ExploreCards;