import { Box, Typography } from '@mui/material'
import React from 'react'
import TokenCard from '../components/TokenCard'

const Token = () => {
    document.title = "NFTs - Token"
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
                    <strong>Token</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', px: 2, pt: 2, fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                    <span style={{ color: '#FF5B50' }}>GENSLR</span> Token
                </Typography>
                <Typography variant='h6' sx={{ px: 2, color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '300', fontSize: '24px', textTransform: 'capitalize' }}>
                    Why diamond hands won’t lose their grip
                </Typography>
            </Box>
            <Box sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'white', px: 2, pt: 2, fontFamily: 'poppins, sans-serif', fontWeight: '400', }}>
                    <span style={{ color: '#FF5B50' }}>$gry</span> is a deﬂationary token
                </Typography>
                <Typography variant='body1' sx={{ px: 6, fontFamily: 'poppins, sans-serif', fontWeight: '300', color: '#DADADA' }}>
                    Deﬂationary token: A deﬂationary token means a cryptocurrency increases in value over time as its circulating supply decreases.
                </Typography>
            </Box>


            <Box sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'white', px: 2, pt: 2, fontFamily: 'poppins, sans-serif', fontWeight: '400', }}>
                    <span style={{ color: '#FF5B50' }}>$gry</span> Token Summary
                </Typography>
                <Typography variant='body1' sx={{ px: 6, fontFamily: 'poppins, sans-serif', fontWeight: '300', color: '#DADADA' }}>
                    designed with the following principles in mind
                </Typography>
            </Box>


            <TokenCard />
        </React.Fragment>
    )
}

export default Token