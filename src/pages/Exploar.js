import { Box, Typography } from '@mui/material'
import React from 'react'
import ExploreCards from '../components/ExploreCards'

const Exploar = () => {
    document.title = "NFTs - Explore"
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
                <Typography variant="h3" gutterBottom sx={{ color: 'white', backgroundColor: '#FF5B5080', p: 1, fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                    <strong>Explore NFTs</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4, mb: -10 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', p: 2, fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                    <span style={{ color: '#FF5B50' }}>Explore</span> New NFTs
                </Typography>
            </Box>
            <ExploreCards size={8} />

        </React.Fragment >
    )
}

export default Exploar