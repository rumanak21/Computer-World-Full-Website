import React from 'react';
import HomeInventory from '../HomeInventory/HomeInventory';
import Banner from './../Header/Banner/Banner'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeInventory></HomeInventory>
        </div>
    );
};

export default Home;