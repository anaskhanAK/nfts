import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FetchingDataFromApi } from '../utils/Api';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [itemDetails, setItemDetails] = useState(null);
    const location = useLocation();
    const nft = location.state?.selectedNft;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (!nft) {
                    response = (await FetchingDataFromApi(`/nft/my/?id=${id}`)).data.nft[0];
                    console.log(response);
                }
                else {
                    response = nft;
                }
                console.log(response);
                setItemDetails(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    if (!itemDetails) {
        return <div>Loading...</div>;
    }

    const walletAddress = itemDetails?.wallet;
    const shortenedAddress = walletAddress ? `${walletAddress.slice(0, 12)}...${walletAddress.slice(-4)}` : '';

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
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }}
            >
                <Typography variant="h3" gutterBottom sx={{ color: 'white', backgroundColor: '#FF5B5080', p: 1, fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                    <strong>Item Details</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4, }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', p: 2, fontFamily: 'poppins, sans-serif', fontWeight: '600', }}>
                    <span style={{ color: '#FF5B50' }}>Discover</span> NFT in Details
                </Typography>
            </Box>
            <Grid container spacing={2}>

                <Grid data-aos="zoom-in" item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <img src={"./nft-pic.png"} alt={itemDetails.name}
                        style={{
                            width: "80%",
                            borderRadius: '10px',
                            height: 'fit-content',
                            boxShadow: '4px 4px 4px 0px #56565640',
                        }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper sx={{
                        backgroundColor: '#151515',
                        p: 2,
                        m: 2,
                        mx: 6,
                        border: '1px solid #5A5757',
                        boxShadow: '4px 4px 4px 0px #56565640'
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '50%' }}>
                                <Typography variant='h6' sx={{ color: 'white', mx: 3, fontFamily: 'poppins, sans-serif', fontWeight: '600' }}> {itemDetails.name}</Typography>
                            </Box>
                            <Box sx={{ width: '50%', textAlign: 'end' }}>
                                <IconButton>
                                    <img src='theameArrow.png' alt='icon' style={{ width: '35px' }} />
                                </IconButton>
                            </Box>
                        </Box>
                        <Typography variant='subtitle1' sx={{ color: '#FFFFFF', mx: 3, fontFamily: 'poppins, sans-serif', fontWeight: '300', fontSize: '14px' }}>
                            {itemDetails.description}
                        </Typography>

                        <Grid container sx={{ display: 'flex', justifyContent: 'center', }}>
                            <Grid item sx={{ maxWidth: '200px', display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '100px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='userIcon.png' alt='userIcon' />
                                </Box>
                                <Box sx={{ width: '200px', p: 1, color: 'white' }}>
                                    <Typography variant="body" gutterBottom>
                                        <strong>Item Owner</strong>
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                        {shortenedAddress}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item sx={{ maxWidth: '200px', display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '100px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='collectbileIcon.png' alt='userIcon' />
                                </Box>
                                <Box sx={{ width: '200px', p: 1, color: 'white' }}>
                                    <Typography variant="body" gutterBottom>
                                        <strong>NFT Current Bid</strong>
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                        {itemDetails.currentBid}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item sx={{ maxWidth: '200px', display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '100px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='assetIcon.png' alt='userIcon' />
                                </Box>
                                <Box sx={{ width: '200px', p: 1, color: 'white' }}>
                                    <Typography variant="body" gutterBottom>
                                        <strong>Item Category</strong>
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                        {itemDetails.categories}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item sx={{ maxWidth: '200px', display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                <Box sx={{ p: 1, backgroundColor: '#FF5B50', width: '100px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='creationDateIcon.png' alt='userIcon' />
                                </Box>
                                <Box sx={{ width: '200px', p: 1, color: 'white' }}>
                                    <Typography variant="body" gutterBottom>
                                        <strong>Creation Date</strong>
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom sx={{ mt: 2, color: '#5A5757' }}>
                                        {new Date(itemDetails.createdAt).toDateString()}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        {/* <Typography variant="body" gutterBottom sx={{ color: 'white', m: 3 }}>
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
                                    {itemDetails.currentBid}
                                </Typography>
                            </Box>

                        </Box> */}
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment >
    )
}

export default Details