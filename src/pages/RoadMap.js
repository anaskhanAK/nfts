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
                <Typography variant="h3" gutterBottom sx={{ color: 'white', backgroundColor: '#FF5B5080', p: 1 }}>
                    <strong>RoadMap</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', p: 2 }}>
                    <span style={{ color: '#FF5B50' }}>GENSLR</span> RoadMap
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4 }}>

                <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                    <img src='roadmap1.png' alt='step1' style={{ width: "100%" }} />
                </Grid>
                <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white', textAlign: 'end' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                        corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                        oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                    </Typography>
                </Grid>


                <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                        corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                        oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                    </Typography>
                </Grid>
                <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                    <img src='roadmap2.png' alt='step1' style={{ width: "100%" }} />
                </Grid>
                <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                    <img src='roadmap3.png' alt='step1' style={{ width: "100%" }} />
                </Grid>
                <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                        corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                        oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                    </Typography>
                </Grid>
                <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'white' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae similique
                        corrupti possimus asperiores provident <span style={{ color: '#FF5B50' }}>aliquid.Quisquam</span> autemodit hic alias v
                        oluptas iusto impedit libero harum. Nam maxime nesciunt itaque eligendi.
                    </Typography>
                </Grid>
                <Grid item sx={{ maxWidth: "745px", m: 1 }}>
                    <img src='roadmap4.png' alt='step1' style={{ width: "100%" }} />
                </Grid>
            </Grid>
            <BasicAccordion/>

        </React.Fragment>
    )
}

export default RoadMap