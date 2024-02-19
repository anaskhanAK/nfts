import React, { useEffect, useState } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import NftCards from '../../NftCards';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const MyNft = () => {
    document.title = "NFTs - MyNfts";

    const [loading, setLoading] = useState(true);
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='client-content'>
                <div className='dashboard-heading'>
                    <h2>My Nfts</h2>
                    <p>Hi, <span style={{ color: '#FF5B50' }}>{localStorage.getItem('walletAddress')} </span> Welcome back  to #GENSLR Dashboard!</p>
                </div>

                {loading ? (
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                ) : (
                    localStorage.getItem('walletAddress') ?
                        (
                            <NftCards size={8} sx={{ mt: 2 }} />

                        ) : (

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
                )}

            </div>
        </>
    )
}

export default MyNft