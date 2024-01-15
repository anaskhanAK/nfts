import * as React from 'react';
import Navebar from '../components/Navebar';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


const Layout = () => {

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <Navebar />

                <Box component="main" sx={{
                    flexGrow: 1,
                    // p: 3,
                    width: '100%',
                    backgroundColor: '#0E0E0E',
                }}>
                    <DrawerHeader />
                    <Outlet />
                    <Footer />
                </Box>

            </Box>
        </React.Fragment>
    )
}

export default Layout