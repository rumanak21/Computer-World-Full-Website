import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

const AllSupplier = () => {
    return (
        <div className='container '>
            <h1 className='text-center m-5'>All Supplier</h1>
           <div className='d-flex flex-row flex-wrap justify-content-sm-center align-items-center'>
           <div className='m-2 '>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png" />

                </Card>



            </div>
            <div className='m-2'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://logos-world.net/wp-content/uploads/2020/11/Hewlett-Packard-Logo-1981-2008.png" />

                </Card>
            </div>
            <div className='m-2'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Emblem.jpg" />

                </Card>
            </div>
            <div className='m-2'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://png.pngitem.com/pimgs/s/349-3493342_lenovo-logo-300-x-300-hd-png-download.png" />

                </Card>
            </div>
           </div>
        </div>
    );
};

export default AllSupplier;