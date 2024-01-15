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



// const pages = ['Home', 'Token', 'Explore', 'Asset', 'RoadMap'];

function Navebar() {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

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
    }



    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#151515' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src='nfts_logo.png' alt='logo' />
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleHomeClick}>
                                <Typography textAlign="center"> Home </Typography>
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

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleHomeClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize' }}
                        >
                            Home
                        </Button>
                        <Button
                            onClick={handleTokenClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize' }}
                        >
                            Token
                        </Button>
                        <Button
                            onClick={handleExploreClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize' }}
                        >
                            Explore
                        </Button>
                        <Button
                            onClick={handleAssetsClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize' }}
                        >
                            Assets
                        </Button>
                        <Button
                            onClick={handleRoadMapClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize' }}
                        >
                            RoadMap
                        </Button>
                        <Button
                            onClick={handleRafflesClick}
                            sx={{ my: 1, color: 'white', display: 'block', textTransform: 'capitalize' }}
                        >
                            Raffles
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                width: "200px",
                                height: '45px',
                                my: 1,
                                ml: 4,
                                textTransform: 'capitalize',
                                backgroundColor: '#FF5B50',
                                borderRadius: '12px'
                            }}
                        >Conect Wallet</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navebar;