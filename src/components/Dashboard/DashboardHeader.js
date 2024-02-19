import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { toast } from 'react-toastify';
import './sidebarlayout.css';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ handleSideBarToggle }) => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogoutClick = () => {
        navigate('/')
        localStorage.removeItem('userToken');
        localStorage.removeItem('walletAddress');
        toast.success('Wallet disconnected successfully', {
            position: "bottom-right",
            closeOnClick: true,
            pauseOnHover: true,
        });
        window.location.reload();
    }

    const walletAddress = localStorage.getItem('walletAddress');
    const shortenedAddress = walletAddress ? `${walletAddress.slice(0, 12)}...${walletAddress.slice(-4)}` : '';


    return (
        <>
            <header className=''>
                <div className=''>
                    <div className='header-main'>
                        <div className='humberger-header'>
                            {/* <img src='/Shape.png'  /> */}
                            <GiHamburgerMenu onClick={handleSideBarToggle} style={{ color: '#FF5B50', fontSize: '27px' }} />
                        </div>

                        <div className='search-box'>
                            <input placeholder="Search" className="search-input" />
                            <img src='/icon-search.png' />
                        </div>

                        <div className='icons-top'>

                            {/* <div className='notification-div'>
                                <IoMdNotificationsOutline style={{ fontSize: "24px" }} />
                            </div> */}
                            {/* <div className='popup'>12</div>

                            <div className='notification-div'>
                                <img src='/Layer 2.png' />
                            </div>
                            <div className='popup-two'>15</div> */}


                            {/* <div className='notification-div'>
                                <img src='/Vector (1).png' />
                            </div> */}

                        </div>

                        <div className='right-pic-main'>
                            {/* <h4>Hello,</h4> */}
                            <h3 style={{ color: '#FF5B50' }}>
                                {/* {localStorage.getItem('walletAddress')} */}
                                {shortenedAddress}
                            </h3>
                            <img src='/placeholder.png'
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            />
                            <div>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem >Home</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleLogoutClick}>Disconnect</MenuItem>
                                </Menu>
                            </div>
                        </div>

                    </div>
                </div>
            </header >
        </>
    )
}

export default DashboardHeader