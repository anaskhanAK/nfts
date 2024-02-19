import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import NftCards from '../components/NftCards'

const Assets = () => {
    document.title = "NFTs - Assets"
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
                    <strong>My Assets</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4, mb: -10 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', p: 2 }}>
                    <span style={{ color: '#FF5B50' }}>My</span> NFT Asset
                </Typography>
            </Box>
            {localStorage.getItem('walletAddress') ?
                (
                    <NftCards size={8} />

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
            }


        </React.Fragment>
    )
}

export default Assets