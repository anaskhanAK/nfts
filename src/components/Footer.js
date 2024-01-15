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
            <Box sx={{ backgroundColor: '#151515' }}>
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
                        <Grid item sx={{ py: 6, minWidth: '480px' }} xs>
                            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', textAlign: 'center', m: 2 }}>
                                stay in the loop
                                <span style={{ color: '#FF5B50' }}> get latest insights</span>
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <input
                                    type='email'
                                    placeholder='anaskhankin1999@gmail.com'
                                    style={{
                                        width: '300px',
                                        height: '32px'
                                    }}
                                />
                                <Button variant='contained' sx={{backgroundColor:'#FF5B50'}}> send</Button>
                            </Box>
                        </Grid>
                        <Divider orientation="vertical" sx={{ backgroundColor: 'white' }} flexItem />
                        <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }} xs={6} container>
                            <Grid item sx={{ width: '260px', textAlign: 'center', p: 1 }}>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: '#FF5B50', textAlign: 'center', m: 1 }}>
                                    Heading 1
                                </Typography>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                            </Grid>
                            <Grid item sx={{ width: '260px', textAlign: 'center', p: 1 }}>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: '#FF5B50', textAlign: 'center', m: 1 }}>
                                    Heading 2
                                </Typography>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                            </Grid>
                            <Grid item sx={{ width: '260px', textAlign: 'center', p: 1 }}>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: '#FF5B50', textAlign: 'center', m: 1 }}>
                                    Heading 3
                                </Typography>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                                <Button sx={{ width: '200px', color: 'white' }}>Option</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '50%', p: 2, color: "white" }}>
                    © All Rights Reserved
                </Box>
                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'end' }}>
                    <IconButton>
                        <img src='Facebook.png' alt='icon' style={{ width: '35px' }} />
                    </IconButton>
                    <IconButton>
                        <img src='linkediN.png' alt='icon' style={{ width: '35px' }} />
                    </IconButton>
                    <IconButton>
                        <img src='Twitter.png' alt='icon' style={{ width: '35px' }} />
                    </IconButton>
                    <IconButton>
                        <img src='Youtube.png' alt='icon' style={{ width: '35px' }} />
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