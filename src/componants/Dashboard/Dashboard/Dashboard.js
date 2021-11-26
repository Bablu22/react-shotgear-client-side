import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Dashboard.css'


const Dashboard = () => {

    const { admin } = useAuth()

    return (
        <>
            <Navigation />
            <div class="px-0  dashboard">

                <div class="d-md-flex">
                    <ul id="navbar-items" class="p-0">

                        {!admin && <>
                            <li> <span class="fas fa-chart-line"></span> <span class="ps-3 name">
                                <Link to={`/dashboard/myorders`} className='text-decoration-none text-white'>My Orders</Link></span>
                            </li>
                            <li> <span class="fas fa-chart-line"></span> <span class="ps-3 name">
                                <Link to={`/dashboard/review`} className='text-decoration-none text-white'>Review</Link></span>
                            </li>
                        </>}

                        {admin && <>

                            <li> <span class="fas fa-th-list"></span> <span class="ps-3 name">
                                <Link to={'/dashboard'} className='text-decoration-none text-white'>Dashboard</Link></span>
                            </li>
                            <li> <span class="fas fa-chart-line"></span> <span class="ps-3 name">
                                <Link to={`/dashboard/makeAdmin`} className='text-decoration-none text-white'>Make Admin</Link></span>
                            </li>
                            <li> <span class="fas fa-chart-line"></span> <span class="ps-3 name">
                                <Link to={`/dashboard/allOrders`} className='text-decoration-none text-white'>All Orders</Link></span>
                            </li>
                            <li> <span class="fas fa-chart-line"></span> <span class="ps-3 name">
                                <Link to={`/dashboard/addservice`} className='text-decoration-none text-white'>Add Service</Link></span>
                            </li>
                            <li> <span class="fas fa-chart-line"></span> <span class="ps-3 name">
                                <Link to={`/dashboard/manageService`} className='text-decoration-none text-white'>Manage Service</Link></span>
                            </li>
                        </>

                        }
                    </ul>



                    <div id="topnavbar">





                        <Outlet>

                        </Outlet>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;