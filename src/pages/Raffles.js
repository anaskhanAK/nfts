import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Baseurl } from '../utils/Api';
import { toast } from 'react-toastify';
import { FetchingDataFromApi } from '../utils/Api';
import { CgCloseR } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


const cardStyle = {
    padding: '15px',
    color: 'black',
    backgroundColor: '#151515',
    margin: '10px',
    overflow: 'hidden',
    cursor: 'pointer'

};

const Raffles = () => {
    const [open, setOpen] = React.useState(false);
    const [popupOpen, setPopupOpen] = React.useState(false);
    const [qrCodeUrl, setQrCodeUrl] = React.useState('');

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    const [rafflesData, setRafflesData] = React.useState({
        id: '',
        bid: ''
    });

    const [rafflesCard, setRafflesCardData] = React.useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setRafflesData({
            ...rafflesData,
            [name]: Number(value)
        })
    };

    const headers = {
        Authorization: "Bearer " + localStorage.getItem('walletAddress'),
        "Content-Type": "application/json",
    };
    const navigate = useNavigate();

    if (!localStorage.getItem('walletAddress')) {
        navigate('/')
        toast.error('Please Connect Your Wallet First')
    }
    // place a bid nft 
    const handleSubmitData = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${Baseurl}/nft/bid`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(rafflesData),
            });

            if (response.ok) {
                console.log(response);

                const data = await response.json();
                setRafflesData({
                    id: data.id,
                    bid: data.bid
                })

                toast.success(data.message);
                setOpen(false);
            } else {
                toast.error('An error occurred');
            }
        } catch (error) {
            toast.error(error);
        }
    };

    const rafflesApi = async () => {
        try {
            const response = await FetchingDataFromApi('/nft/raffle');
            const data = await response.data;
            // console.log(data.nft);
            setRafflesCardData(data.nft);
        }
        catch (error) {
            console.log(error);
        }
    }

    // const handleClickOpen = (itemId) => {
    //     setRafflesData({
    //         ...rafflesData,
    //         id: itemId,
    //     })
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        rafflesApi();
    }, []);


    document.title = "NFTs - Raffles"
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
                    <strong>Raffles</strong>
                </Typography>
            </Box>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'white', px: 2, pt: 2, fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                    <span style={{ color: '#FF5B50' }}>NFT</span> Raffles
                </Typography>
                <Typography variant='h6' sx={{ px: 2, color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '400' }}>
                    NFT Raffles curates non fungible tokens as raffles for non profits, artists and collectors.
                </Typography>
            </Box>

            {rafflesCard.length > 0 && localStorage.getItem('walletAddress') ?
                (
                    <Grid container spacing={2} sx={{ p: 5 }}>
                        {rafflesCard.map((items, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Paper style={cardStyle}>
                                    <img src='nftcard.png' alt='card' style={{ width: "100%" }} />
                                    <Typography variant="h6" gutterBottom sx={{ color: 'white', fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>
                                        {items.name}
                                    </Typography>
                                    <Box sx={{}}>
                                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="subtitle" gutterBottom sx={{ color: 'white' }}>
                                                Auction time
                                            </Typography>
                                            <Typography variant="subtitle" gutterBottom sx={{ color: '#FF5B50' }}>
                                                {new Date(items.auctionTime).toLocaleString()}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: '100%', textAlign: 'start', }}>
                                            <Typography variant="subtitle" gutterBottom sx={{ color: 'white', mr: 1, fontFamily: 'Poppins, sans-serif', fontWeight: '300' }}>
                                                Current Bid
                                            </Typography>
                                            <Typography variant="subtitle" gutterBottom sx={{ color: '#FF5B50', textAlign: 'end' }}>
                                                {items.currentBid} ETH
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>

                                        <Button
                                            // onClick={setPopupOpen(true)}
                                            sx={{ width: '100%', my: 2, backgroundColor: '#FF5B50', fontFamily: 'poppins, sans-serif', fontWeight: '600' }} variant='contained' > Place a Bid</Button>
                                        {popupOpen && (
                                            <>
                                                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid black' }}>
                                                    <button onClick={handleClosePopup} style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: '10px', right: '25px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                                                        <Typography sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '600', fontSize: '17px', color: 'black' }}>
                                                            Cancel
                                                        </Typography>
                                                        <CgCloseR style={{ fontSize: '25px', marginLeft: '10px' }} />
                                                    </button>
                                                    <img src={qrCodeUrl} alt="QR Code" style={{ width: '100%', height: 'auto', marginTop: '20px' }} />
                                                </div>

                                            </>
                                        )}
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                ) :
                (
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

            {/* Dialog box */}
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmitData,
                }}
            >
                <DialogTitle sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '600' }} onSubmit={handleSubmitData}>PLACE YOUR BID</DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText sx={{ fontFamily: 'poppins, sans-serif', fontWeight: '400' }}>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    {/* <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Enter your ID"
                        type="number"
                        fullWidth
                        variant="standard"
                        name="id"
                        value={rafflesData.id}
                        onChange={handleInputChange}
                    /> */}
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Place Your Bid"
                        type="number"
                        fullWidth
                        variant="standard"
                        name="bid"
                        value={rafflesData.bid}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" variant='contained' sx={{ background: '#FF5B50', fontFamily: 'poppins, sans-serif', fontWeight: '600' }}>PLACE BID</Button>
                </DialogActions>
            </Dialog>

        </React.Fragment >
    )
}

export default Raffles