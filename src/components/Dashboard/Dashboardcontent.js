import React from 'react'
import CountUp from 'react-countup'
import ExploreCards from '../ExploreCards'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const Dashboardcontent = () => {
    const navigate = useNavigate();
    const handleCardClick = (path) => {
        navigate(`/dashboard/${path}`);
    };
    return (
        <>
            <div className='client-content'>
                <div className='dashboard-heading'>
                    <Box flexDirection='column'>
                        <h2>Dashboard</h2>
                        <p>Hi,<span style={{ color: '#FF5B50' }}> {localStorage.getItem('walletAddress')}</span>. Welcome back To #GENSLR Dashboard!</p>
                        <h2>Balance</h2>
                        <p > <span style={{ color: '#FF5B50' }}> {localStorage.getItem('balance') / 1000000}</span> XRP</p>
                    </Box>
                </div>

                <div className='top-card-main' >
                    <div className='top-card-one' onClick={() => { handleCardClick('transactions') }}>
                        <div className='circle-img'><img alt="cards" src='/Ellipse 2.png' /></div>
                        <div className='right-inner-card'>
                            <h1 >
                                <CountUp start={0} end={localStorage.getItem('transactions')} duration={1} delay={0} />
                            </h1>
                            <h4>Transactions</h4>
                        </div>
                    </div>

                    <div className='top-card-one' onClick={() => { handleCardClick('mynfts') }}>
                        <div className='circle-img'><img alt="cards" src='/Ellipse 2.png' /></div>
                        <div className='right-inner-card'>
                            <h1>
                                <CountUp start={0} end={localStorage.getItem('nft')} duration={2} delay={0} />
                            </h1>
                            <h4>NFTs</h4>
                        </div>
                    </div>


                    <div className='top-card-one' onClick={() => { handleCardClick('proposition') }}>
                        <div className='circle-img'><img alt="cards" src='/Ellipse 2.png' /></div>
                        <div className='right-inner-card'>
                            <h1>
                                <CountUp start={0} end={localStorage.getItem('proposition')} duration={2} delay={0} />
                            </h1>
                            <h4>Propositions</h4>
                        </div>
                    </div>
                    <div className='top-card-one' onClick={() => { handleCardClick('raffles') }}>
                        <div className='circle-img' ><img alt="cards" src='/Ellipse 2.png' /></div>
                        <div className='right-inner-card'>
                            <h1>
                                <CountUp start={0} end={localStorage.getItem('raffle')} duration={2} delay={0} />
                            </h1>
                            <h4>Raffles</h4>
                        </div>
                    </div>
                </div>
                <div className='dashboard-heading'>
                    <h2>Explore Nfts</h2>
                    <p></p>
                </div>

                <ExploreCards size={8} />
                {/* 
                {localStorage.getItem('walletAddress') ?
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
                                <img alt="cards" src='warning.png' alt='warning' />
                                <Typography variant='body1' gutterBottom sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '400' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique accusantium quae natus odio est ullam ab. Ea iusto corrupti.!F
                                </Typography>
                            </Paper>
                        </Box>
                    )
                } */}

                {/* <RecentModels />
                <RecentFiles /> */}

            </div>
        </>
    )
}

export default Dashboardcontent