import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts/useAllProducts';

const InventoryList = () => {
    const [products, setProducts] = useAllProducts();
    const navigate = useNavigate()
    const handleAddNewItem = () => {
        navigate('/addnewitem')
    }
    const handleDeleteBtn = id => {
        const permission = window.confirm('Are you want to delete it?')
        if(permission){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => 
                console.log(data)
            );
            const remaining = products.filter(product => product._id !== id)
            setProducts(remaining)
        }

       
   
    }
    return (
        <div className='container' >
            <div className='m-5'>
            <Button onClick={handleAddNewItem} variant="primary">Add New Item</Button>
            </div>
            {
                products.map(product => <div key= {product._id} className='row row-cols-lg-2 row-cols-sm-1 m-4'>
                    
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
                            <Card.Text> Supplier Name: {product.supplier}
                            </Card.Text>
                            <Card.Text> Price:  {product.price} TK
                            </Card.Text>
                            <Button onClick={handleDeleteBtn} variant="primary">Delete Item</Button>
                        </Card.Body>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default InventoryList;