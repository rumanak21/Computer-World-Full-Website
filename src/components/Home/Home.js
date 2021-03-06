import React from 'react';
import AllSupplier from '../AllSupplier/AllSupplier';
import ContactUs from '../ContactUs/ContactUs';
import HomeInventory from '../HomeInventory/HomeInventory';
import Banner from './../Header/Banner/Banner'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeInventory></HomeInventory>
            <AllSupplier></AllSupplier>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;