import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAutoMode } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrDocumentCloud } from "react-icons/gr";
import { RiLogoutBoxLine } from "react-icons/ri";
import SidebarMenu from './SidebarMenu';
import { toast } from 'react-toastify';
import './sidebarlayout.css';
import '../../pages/Dashboard/index.css';
import { Typography } from '@mui/material';

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <RxDashboard className='client-icons' />,
    },
    {
        path: "/dashboard/mynfts",
        name: "My NFTS",
        icon: <MdOutlineAutoMode className='client-icons' />,
    },
    {
        path: "/dashboard/proposition",
        name: "Proposition",
        icon: <AiOutlineDollar className='client-icons' />,
    },
    {
        path: "/dashboard/transactions",
        name: "Transactions",
        icon: <CgProfile className='client-icons' />,
    },
    {
        path: "/dashboard/documentation",
        name: "Documentation",
        icon: <GrDocumentCloud className='client-icons' />,
    },
    {
        path: "/",
        name: "Disconnect",
        icon: <RiLogoutBoxLine />
    }

];


const DashboardSidebar = ({ isSidebarOpen }) => {
    const location = useLocation()

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isSidebarOpen ? "250px" : "70px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={` `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    <Link to='/' className='custom-link'>
                                        <Typography sx={{
                                            color: '#ff5b5b', fontSize: '2rem',
                                            fontWeight: 'bold',
                                            mt: -2,
                                            marginRight: 2,
                                            fontFamily: 'Poppins, sans-serif'
                                        }}>
                                            GENSLR
                                        </Typography>
                                    </Link>
                                </motion.h1>
                            )}
                        </AnimatePresence>

                    </div>
                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route?.disabled) route.path = location.pathname

                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="client-link"
                                    activeClassName="client-active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isSidebarOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

            </div>
        </>
    );
}

export default DashboardSidebar