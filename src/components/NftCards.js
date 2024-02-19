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
    boxShadow: '4px 4px 4px 0px #5A575740',
};

const NftCards = ({ size }) => {
    const navigate = useNavigate();
    const [nftData, setNftData] = useState([]);


    const handleCardClick = (id) => {
        const selectedNft = nftData.find(item => item.id === id);
        navigate(`/${id}`, { state: { selectedNft } });
    };

    const fetchData = async () => {
        try {
            const response = await FetchingDataFromApi('/nft/my');
            setNftData(response.data.nft);
            // console.log(response.data.nft);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {localStorage.getItem('walletAddress') && nftData.length > 0 ? (
                <Grid container sx={{ p: 0 }}>
                    {nftData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper style={cardStyle} onClick={() => handleCardClick(item.id)}
                                sx={{ py: 4, ':hover': { border: '1px solid #FF5B50' } }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                    <img src="./nft-pic.png" alt={item.name} style={{ width: "80%", margin: "0 auto", backgroundSize: 'cover', borderRadius: '10px' }} />
                                </Box>
                                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '700', mt: 2 }}>
                                    {item.name}
                                </Typography>
                                <Box sx={{}}>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="subtitle" gutterBottom sx={{ color: 'white' }}>
                                            Auction time
                                        </Typography>
                                        <Typography variant="subtitle" gutterBottom sx={{ color: '#FF5B50' }}>
                                            {new Date(item.auctionTime).toLocaleString()}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '100%', textAlign: 'start', }}>
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
            ) : (
                <Typography variant="body1" gutterBottom sx={{ color: 'white', fontFamily: "poppins, sans-serif", fontSize: '26px', fontWeight: '600', textAlign: 'center', }}>
                    No NFT found. Let's connect your wallet now!
                </Typography>
            )}
        </div>
    );
};

export default NftCards;
