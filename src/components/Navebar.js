import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { Baseurl } from '../utils/Api';
import { useState } from 'react';
import { CgCloseR } from "react-icons/cg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

// const pages = ['Home', 'Token', 'Explore', 'Asset', 'RoadMap'];

function Navebar() {
    const navigate = useNavigate();

    const [uuid, setUuid] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const [addressData, setAddressData] = React.useState({ address: "", userToken: "" });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleExploreClick = () => {
        navigate('/explore');
    }

    const handleHomeClick = () => {
        navigate('/');
    }
    const handleAssetsClick = () => {
        navigate('/assets');
    }
    const handleRoadMapClick = () => {
        navigate('/road-map');
    }
    const handleTokenClick = () => {
        navigate('/token');
    }
    const handleRafflesClick = () => {
        navigate('/raffles');
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setAddressData({
            ...addressData,
            [name]: value
        })
    };

    const handleButtonClick = React.useCallback(() => {
        const event = new EventSource(`${Baseurl}/wallet/address`);

        event.onmessage = (e) => {
            const data = JSON.parse(e.data);

            setUuid(data.uuid);
            setQrCodeUrl(data.qr);
            setPopupOpen(true);

            const wallet = data?.data?.wallet;

            if (wallet && wallet.address && wallet.userToken) {
                setAddressData({
                    address: wallet.address,
                    userToken: wallet.userToken,
                });

                localStorage.setItem('userToken', wallet.userToken);
                localStorage.setItem('walletAddress', wallet.address);
                localStorage.setItem('transactions', wallet.transactions.length);
                localStorage.setItem('nft', wallet.nft);
                localStorage.setItem('proposition', wallet.proposition);
                localStorage.setItem('raffle', wallet.raffle);
                localStorage.setItem('balance', wallet.balance);


                event.close();
                handleClosePopup();
                if (data.status === 200) {
                    navigate('/dashboard')
                    toast.success(data.message);
                }
            }
            else {
                toast.error(data.message);
            }

        }

    }, []);

    const handleLogoutClick = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('walletAddress');
        toast.success('Wallet disconnected successfully', {
            position: "bottom-right",
            closeOnClick: true,
            pauseOnHover: true,
        });
        window.location.reload();
    }


    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    const [avatar, setAvatar] = useState(false);

    const handleAvatar = () => {
        setAvatar(!avatar);
    }
    // const handleDashboardClick = () => {
    //     navigate('/dashboard');
    // }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#151515' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', textDecoration: 'none', fontWeight: '700', fontSize: '28px', color: '#FF5B50' }}>GENSLR</Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', },
                            }}
                        >
                            <MenuItem onClick={handleHomeClick}>
                                <Typography textAlign="center" > Home </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleTokenClick}>
                                <Typography textAlign="center"> Token </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleExploreClick}>
                                <Typography textAlign="center"> Explore </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleAssetsClick}>
                                <Typography textAlign="center"> Assets </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleRoadMapClick}>
                                <Typography textAlign="center"> RoadMap </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleRafflesClick}>
                                <Typography textAlign="center"> Raffles </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* navigation items for medium devices */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            onClick={handleHomeClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize', fontFamily: 'poppins, sans-serif', fontWeight: '400', fontSize: '16px', ':hover': { color: '#FF5B50' } }}
                        >
                            Home
                        </Button>
                        <Button
                            onClick={handleTokenClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize', fontFamily: 'poppins, sans-serif', fontWeight: '400', fontSize: '16px', ':hover': { color: '#FF5B50' } }}
                        >
                            Token
                        </Button>
                        <Button
                            onClick={handleExploreClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize', fontFamily: 'poppins, sans-serif', fontWeight: '400', fontSize: '16px', ':hover': { color: '#FF5B50' } }}
                        >
                            Explore
                        </Button>
                        <Button
                            onClick={handleAssetsClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize', fontFamily: 'poppins, sans-serif', fontWeight: '400', fontSize: '16px', ':hover': { color: '#FF5B50' } }}
                        >
                            Assets
                        </Button>
                        <Button
                            onClick={handleRoadMapClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize', fontFamily: 'poppins, sans-serif', fontWeight: '400', fontSize: '16px', ':hover': { color: '#FF5B50' } }}
                        >
                            RoadMap
                        </Button>
                        <Button
                            onClick={handleRafflesClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize', fontFamily: 'poppins, sans-serif', fontWeight: '400', fontSize: '16px', ':hover': { color: '#FF5B50' } }}
                        >
                            Raffles
                        </Button>


                        {/* connect wallect button  */}
                        <Box>

                            {localStorage.getItem('userToken') ? (
                                <>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        sx={{ width: 56, height: 56, ml: 4, cursor: 'pointer' }}
                                        onClick={handleAvatar}
                                    />

                                    {avatar && (
                                        <>
                                            <Box sx={{
                                                backgroundColor: 'white', position: 'absolute',
                                                right: 0,
                                                color: "black",
                                                borderRadius: '5px',
                                                py: 1,
                                            }}>
                                                <Link to='/dashboard' className='custom-link'>
                                                    <Box sx={{
                                                        cursor: "pointer",
                                                        borderRadius: '3px',
                                                        padding: "5px 30px",
                                                        '&:hover': { backgroundColor: '#FF5B50', color: 'white' },
                                                    }}
                                                    >

                                                        Dashboard</Box>
                                                </Link>
                                                {/* <Box sx={{
                                                    cursor: "pointer",
                                                    borderRadius: '3px',
                                                    padding: "5px 30px",
                                                    '&:hover': { backgroundColor: '#FF5B50', color: 'white' },
                                                }}>Profile</Box> */}
                                                <Box sx={{
                                                    cursor: "pointer",
                                                    borderRadius: '3px',
                                                    padding: "5px 30px",
                                                    '&:hover': { backgroundColor: '#FF5B50', color: 'white' },
                                                }}
                                                    onClick={handleLogoutClick}
                                                >Disconnect</Box>
                                            </Box>
                                        </>
                                    )}
                                </>
                            ) : (
                                <Button
                                    sx={{
                                        width: "180px",
                                        height: '45px',
                                        my: 1,
                                        ml: 4,
                                        textTransform: 'capitalize',
                                        backgroundColor: '#FF5B50',
                                        borderRadius: '12px',
                                        fontFamily: 'poppins, sans-serif',
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        color: 'white',
                                    }}
                                    onClick={handleButtonClick}
                                >
                                    Connect Wallet
                                </Button>
                            )}

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

                        {/* Connect your wallet popup */}
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <DialogTitle sx={{ m: 0, p: 2, fontFamily: 'poppins, sans-serif', fontWeight: '700' }} id="customized-dialog-title">
                                LET'S CONNECT YOUR WALLET
                            </DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers width={'80%'}>
                                <Typography gutterBottom sx={{ fontFamily: 'poppins, sans-serif' }}>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                    consectetur ac, vestibulum at eros.
                                </Typography>
                                <TextField
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="name"
                                    name="address"
                                    label="Your Wallet Adress"
                                    type="string"
                                    fullWidth
                                    variant="standard"
                                    sx={{
                                        fontFamily: 'poppins, sans-serif',
                                    }}
                                    disabled={true}
                                    value={addressData.address}
                                    onChange={handleInputChange}
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button autoFocus
                                    //  onClick={wallectPost}
                                    variant='contained' sx={{ backgroundColor: '#FF5B50' }}>
                                    Connect
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
};

export default Navebar;