import React, { useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails/useItemDetails';

const ManageItem = () => {
    const [quantity, setQuantity] = useState(50)
    const { itemId } = useParams();
    const [item] = useItemDetails(itemId);
  

    const handleDelivered = () => {
        const allAroducts = quantity-1
         setQuantity(allAroducts)
    }
    const inputRef  = useRef();

    const addQuantity = () => {
        const stringNumber = inputRef.current.value;
        const number = parseInt(stringNumber)
        setQuantity(number+quantity)
        
        inputRef.current.value = ""
    }

    return (
        <div className='container d-flex flex-row m-5 justify-content-center' >
            <div>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={item.picture} />

                </Card>
            </div>
            <div className='mx-5'>

                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.shortDescription}
                    </Card.Text>
                    <Card.Text> Supplier Name: {item.supplier}
                    </Card.Text>
                    <Card.Text> Price: {item.price} TK
                    </Card.Text>
                    <p>Quantity: <span id='quantity' >{quantity}</span></p>

                </Card.Body>
                <Button onClick={handleDelivered} className='mb-2' variant="primary">Delivered</Button> <br />
                <input type="text" ref={inputRef} name=""  placeholder='Add Quantity' />
                <Button onClick={addQuantity} className='mb-2' type='submit' variant="success">Add</Button>
            </div>

        </div>
    );
};

export default ManageItem;