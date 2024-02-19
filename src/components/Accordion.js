import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export default function BasicAccordion() {
    return (
        <React.Fragment>
            {/* <Box sx={{ borderLeft: '8px solid #FF5B50', width: '90%', margin: 'auto', postion: 'relative', mb: 10 }}> */}
            <Box sx={{ m: 4, }}>
                <Box sx={{ position: 'absolute', background: 'white', border: ' 1px solid #FFFFFF', width: '15px', height: '15px', left: '3.7rem', marginTop: '15px' }}></Box>

                <Accordion sx={{ backgroundColor: '#151515', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>HEADING-1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '400', color: '#B9B2B2' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box sx={{ m: 4 }}>
                <Box sx={{ position: 'absolute', background: 'white', border: ' 1px solid #FFFFFF', width: '15px', height: '15px', left: '3.7rem', marginTop: '15px' }}></Box>
                <Accordion sx={{ backgroundColor: '#151515', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>HEADING-2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '400', color: '#B9B2B2' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box sx={{ m: 4 }}>
                <Box sx={{ position: 'absolute', background: 'white', border: ' 1px solid #FFFFFF', width: '15px', height: '15px', left: '3.7rem', marginTop: '15px' }}></Box>

                <Accordion sx={{ backgroundColor: '#151515', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>HEADING-3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '400', color: '#B9B2B2' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box sx={{ m: 4 }}>
                <Box sx={{ position: 'absolute', background: 'white', border: ' 1px solid #FFFFFF', width: '15px', height: '15px', left: '3.7rem', marginTop: '15px' }}></Box>

                <Accordion sx={{ backgroundColor: '#151515', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>HEADING-4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '400', color: '#B9B2B2' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box sx={{ m: 4 }}>
                <Box sx={{ position: 'absolute', background: 'white', border: ' 1px solid #FFFFFF', width: '15px', height: '15px', left: '3.7rem', marginTop: '15px' }}></Box>

                <Accordion sx={{ backgroundColor: '#151515', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>HEADING-5</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '400', color: '#B9B2B2' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box sx={{ m: 4 }}>
                <Box sx={{ position: 'absolute', background: 'white', border: ' 1px solid #FFFFFF', width: '15px', height: '15px', left: '3.7rem', marginTop: '15px' }}></Box>

                <Accordion sx={{ backgroundColor: '#151515', color: 'white' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>HEADING-6</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '400', color: '#B9B2B2' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            {/* </Box> */}
        </React.Fragment >

    );
}