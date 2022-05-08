import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useAllProducts from '../../hooks/useAllProducts/useAllProducts';

const InventoryList = () => {
    const [products] = useAllProducts();
    return (
        <div className='container' >
            {
                products.map(product => <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {product.picture} />
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
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default InventoryList;