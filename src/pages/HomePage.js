import React from 'react'
import { Avatar, AvatarGroup, Box, Grid, Typography } from '@mui/material'
import NftSlider from '../components/NftSlider'
import Conust from '../components/Conust'
import HowItWorks from '../components/HowItWorks'
import Utility from '../components/Utility'
import NftCards from '../components/NftCards'

export const HomePage = () => {
    document.title = "NFTs - Home"
    return (
        <React.Fragment>
            <Grid
                container
                spacing={0}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url(Body.png)',
                    backgroundSize: 'auto 838px',
                    minHeight: '728px',
                    pb: 16,
                    pt: 6
                }}
            >
                <Grid item sx={{ p: 2 }}>
                    <img src='badge.png' alt='g' />
                </Grid>
                <Grid item xs={8} container sx={{ p: 7 }}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h2" component="div" sx={{ color: 'white' }}>
                            <strong><span style={{ color: '#FF5B50' }}>Focused on</span> your financial future and security</strong>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }}>
                            Utility over hopium, common sense over FOMO
                        </Typography>
                        <Grid item container spacing={2} sx={{ display: "flex", alignItems: 'center', pt: 4 }}>
                            <Grid item>
                                <AvatarGroup total={24}>
                                    <Avatar alt="Remy Sharp" src="avatar1.jpeg" />
                                    <Avatar alt="Travis Howard" src="avatar2.jpeg" />
                                    <Avatar alt="Agnes Walker" src="avatar3.jpeg" />
                                    <Avatar alt="Trevor Henderson" src="avatar4.png" />
                                </AvatarGroup>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white' }}>
                                    artistas selecionados
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ pt: 3 }}>
                <NftSlider />
            </Box>
            <Box sx={{ pt: 3 }}>
                <NftSlider />
            </Box>
            <Box sx={{ p: 4, display: 'flex', alignItems: "center" }}>
                <Conust />
            </Box>
            <Box>
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'space-between', px: 6 }}>
                    <Grid item sx={{ maxWidth: "600px" }}>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                            corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                            oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                        </Typography>
                    </Grid>
                    <Grid item sx={{ maxWidth: "600px" }}>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', textAlign: 'end' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                            corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                            oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "center", width: '100%', py: 5 }}>
                <img src='nftCoin.png' alt='Nft Coin' style={{ width: "94%" }} />
            </Box>
            <NftCards size={4}/>
            
            <Box sx={{py:4}}>
                <HowItWorks />
            </Box>
            <Box sx={{py:4}}>
                <Utility/>
            </Box>


        </React.Fragment>
    )
}
