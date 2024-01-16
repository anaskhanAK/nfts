import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BasicAccordion from '../components/Accordion'

const RoadMap = () => {
    document.title = "NFTs - Road Map"
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
                    <strong>RoadMap</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', p: 2, fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                    <span style={{ color: '#FF5B50', }}>GENSLR</span> RoadMap
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4 }}>

                <Grid data-aos="fade-left" item sm={12} md={6} sx={{ p: 1 }}>
                    <img src='roadmap1.png' alt='step1' style={{ width: "100%" }} />
                </Grid>

                <Grid data-aos="fade-right" item sm={12} md={6} sx={{ p: 1 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', textAlign: 'end', fontFamily: 'poppins, sans-serif', fontWeight: '400' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                        corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                        oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                    </Typography>
                </Grid>


                <Grid data-aos="fade-left" item sm={12} md={6} sx={{ p: 1 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '400' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                        corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                        oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                    </Typography>
                </Grid>
                <Grid data-aos="fade-right" item sm={12} md={6} sx={{ p: 1 }}>
                    <img src='roadmap2.png' alt='step1' style={{ width: "100%" }} />
                </Grid>

                <Grid data-aos="fade-left" item sm={12} md={6} sx={{ p: 1 }}>
                    <img src='roadmap3.png' alt='step1' style={{ width: "100%" }} />
                </Grid>
                <Grid data-aos="fade-right" item sm={12} md={6} sx={{ p: 1 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '400' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                        corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                        oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                    </Typography>
                </Grid>

                <Grid data-aos="fade-left" item sm={12} md={6} sx={{ p: 1 }} >
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '400' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                        corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                        oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                    </Typography>
                </Grid>
                <Grid data-aos="fade-right" item sm={12} md={6} sx={{ p: 1 }} >
                    <img src='roadmap4.png' alt='step1' style={{ width: "100%" }} />
                </Grid>

            </Grid>
            <BasicAccordion />

        </React.Fragment >
    )
}

export default RoadMap