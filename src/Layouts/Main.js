import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Quiz from '../components/Quiz/Quiz';


const Main = () => {
    
    return (           
            <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
    );
};

export default Main;