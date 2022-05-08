import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useAllProducts from '../../hooks/useAllProducts/useAllProducts';

const InventoryList = () => {
    const [products] = useAllProducts();
    return (
        <div className='container' >
            <div className='m-5'>
            <Button variant="primary">Add New Item</Button>
            </div>
            {
                products.map(product => <div className='row row-cols-lg-2 row-cols-sm-1 m-4'>
                    
                    <div>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src= {product.picture} /> 
                    </Card>
                    </div>
                    <div>
                    <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                            {product.shortDescription}
                            </Card.Text>
                            <Card.Text> Supplier Name:
                            {product.supplier}
                            </Card.Text>
                            <Card.Text> Price: 
                            {product.price} TK
                            </Card.Text>
                            <Button variant="primary">Delete Item</Button>
                        </Card.Body>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default InventoryList;