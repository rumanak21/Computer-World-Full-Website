import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Manage_Inventories = () => {
    const navigate = useNavigate()
    const manageInventories = () => {
        navigate('/inventory')
    }
    return (
        <div className='d-flex justify-content-center w-100'>
            <Button onClick={manageInventories} className="btn btn-secondary btn-lg" variant="primary">Manage Inventories</Button>
        </div>
    );
};

export default Manage_Inventories;