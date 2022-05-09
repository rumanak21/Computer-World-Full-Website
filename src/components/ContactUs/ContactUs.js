import React from 'react';
import { Button } from 'react-bootstrap';
import image from './../../img/contact-us.jpg'

const ContactUs = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center mt-5'>
            <div className='me-5'>
                <img width={"90%"} src={image} alt="" srcset="" />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center '>
            <h3 className='text-secondary'>Do you have any question?</h3>
            <h3 className='text-secondary'>Feel free to contact us.</h3>
            <Button variant="secondary" size="lg">
      Contact Us &#128222;
    </Button>
            </div>
        </div>
    );
};

export default ContactUs;