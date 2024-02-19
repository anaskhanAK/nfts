// client dashboard 

import React, { useState } from 'react';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import './index.css';
import Dashboardcontent from '../../components/Dashboard/Dashboardcontent';


const ClientDashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const handleSideBarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };



    return (
        <>
            <section className='full-section'>
                <div className="dashboard-container">
                    <div className='client-sidebar-wrapper'>
                        <DashboardSidebar
                            isSidebarOpen={isSidebarOpen}
                        // handleSideBarToggle={handleSideBarToggle}
                        //  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} 
                        />
                    </div>
                    <div className='content-wrapper'>
                        <div className='menu-wrapper'>
                            <DashboardHeader
                                handleSideBarToggle={handleSideBarToggle}

                            //  toggleSidebar={OpenSidebar}
                            />
                        </div>

                        <div style={{ height: 'calc(100vh - 88px)', overflow: 'auto', }}>
                            <Outlet />
                            {/* <Dashboardcontent /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default ClientDashboard