import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts/useAllProducts';
import Manage_Inventories from '../Manage_Inventories/Manage_Inventories';

const HomeInventory = (props) => {
    const [products] = useAllProducts();
    const productSlice = products.slice(0, 6)
    const navigate = useNavigate()
    const nevigateToManageItem = (id) => {
        navigate(`/manageitem/${id}`)
    }

    return (
        <div>
            <h2 className='text-center mt-5 fs-1 text-success' >Inventory Items</h2>
            <div className=' container-fluid row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 m-5'  >

                {
                    productSlice.map(product => <div key={product._id} >
                        <Container>
                            <div className=' ' >
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product.picture} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.shortDescription.slice(0, 100)}
                                        </Card.Text>
                                        <Card.Text> Supplier Name: {product.supplier}
                                        </Card.Text>
                                        <Card.Text> Price: {product.price} TK
                                        </Card.Text>
                                        <Button onClick={() => nevigateToManageItem(product._id)} variant="primary">Manage Item</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Container>

                    </div>)
                }
            </div>
            <Manage_Inventories></Manage_Inventories>
        </div>
    );
};

export default HomeInventory;