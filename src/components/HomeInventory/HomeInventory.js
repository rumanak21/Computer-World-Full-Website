import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import useAllProducts from '../../hooks/useAllProducts/useAllProducts';

const HomeInventory = (props) => {
    const [products] = useAllProducts();
    const productSlice = products.slice(0,6)
    return (
        <div>
                <h2 className='text-center mt-5 fs-1 text-success' >Some Inventory Item</h2>
            <div className=' container-fluid row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 m-5'  >
          
          {
              productSlice.map(product => <div>
                 <Container>
                 <div className=' ' >
                 <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src= {product.picture} />
                      <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>
                          {product.shortDescription.slice(0, 100)}
                          </Card.Text>
                          <Card.Text> Supplier Name: {product.supplier}
                          </Card.Text>
                          <Card.Text> Price: {product.price} TK
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                  </Card>
                 </div>
                 </Container>
              </div>)
          }
      </div>
        </div>
    );
};

export default HomeInventory;