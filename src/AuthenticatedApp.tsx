import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Coins from './pages/Coins';
import Navbar from './components/Navbar'
import Intro from './pages/Intro';
import Categories from './pages/Categories';

const AuthenticatedApp = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/coins' element={<Coins />} />
        </Routes>
        </BrowserRouter>
    );
};

AuthenticatedApp.propTypes = {
    
};

export default AuthenticatedApp;