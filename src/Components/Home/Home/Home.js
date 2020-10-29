import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import MainNav from '../MainNav/MainNav';
import './Home.css'

const Home = () => {
    return (
        <div  className="background">
            <MainNav/>
            <HeaderMain/>
        </div>
    );
};

export default Home;