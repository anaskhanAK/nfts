import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const squareIconButtonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '0',
};

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <React.Fragment>
            <Box sx={{ backgroundColor: '#151515', mt: 8 }}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: '50%', p: 1, }}>
                        <img src='nfts_logo.png' alt='NFTs logo' />
                    </Box>
                    <Box sx={{ width: '50%', pb: 1, }}>
                        <IconButton style={squareIconButtonStyle} sx={{ backgroundColor: "#FF5B50", float: 'right', mr: 2 }} onClick={scrollToTop}>
                            <ArrowUpwardIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Divider sx={{ backgroundColor: 'white' }} />
                <Box>
                    <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {/* left side of footer */}
                        <Grid item xs={12} md={3} sx={{ backgroundColor: '#151515', py: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', textAlign: 'center', m: 2, fontFamily: 'Poppins, sans-serif', fontWeight: '600', }}>
                                stay in the loop
                                <span style={{ color: '#FF5B50' }}> get latest insights</span>
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <input
                                    type='email'
                                    placeholder='ENTER YOUR EMAIL HERE'
                                    style={{
                                        height: '32px'
                                        , fontFamily: 'Poppins, sans-serif',
                                        fontWeight: '500',
                                        paddingLeft: '10px',
                                    }}
                                />
                                <Button variant='contained' sx={{ backgroundColor: '#FF5B50', fontFamily: 'Poppins, sans-serif', fontWeight: '600', }}> send</Button>
                            </Box>
                        </Grid>

                        <Divider orientation="vertical" sx={{ backgroundColor: 'white' }} flexItem />

                        {/* right side of footer  */}
                        <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }} xs={12} md={6} container>
                            <Grid item xs={6} md={3} sx={{ textAlign: 'center', p: 1 }}>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', color: '#FF5B50', textAlign: 'center', m: 1 }}>
                                    Heading 1
                                </Typography>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                            </Grid>

                            <Grid item xs={6} md={3} sx={{ textAlign: 'center', p: 1 }}>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: '#FF5B50', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textAlign: 'center', m: 1 }}>
                                    Heading 2
                                </Typography>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                            </Grid>

                            <Grid item xs={6} md={3} sx={{ textAlign: 'center', p: 1 }}>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', color: '#FF5B50', textAlign: 'center', m: 1 }}>
                                    Heading 3
                                </Typography>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                                <Button sx={{ width: '150px', ':hover': { background: '#FF5B50' }, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '400', }}>Option</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Box>

            {/* copyright box  */}
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '100%', p: 2, color: "white", fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                    © All Rights Reserved
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                    <IconButton>
                        <img src='Facebook.png' alt='icon' style={{ width: '32px' }} />
                    </IconButton>
                    <IconButton>
                        <img src='linkediN.png' alt='icon' style={{ width: '32px' }} />
                    </IconButton>
                    <IconButton>
                        <img src='Twitter.png' alt='icon' style={{ width: '32px' }} />
                    </IconButton>
                    <IconButton>
                        <img src='Youtube.png' alt='icon' style={{ width: '32px' }} />
                    </IconButton>
                    <IconButton>
                        <img src='Mail.png' alt='icon' style={{ width: '35px' }} />
                    </IconButton>

                </Box>
            </Box>
        </React.Fragment >

    )
}

export default Footer