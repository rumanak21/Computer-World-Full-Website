import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=>{
            console.log(result)
        })
    };
    
    return (
        <div  >
            <h2 className='text-center text-success m-5' >Add New Item</h2>
            <form   onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2 w-50 d-block mx-auto' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
            <input className='mb-2 w-50 d-block mx-auto' placeholder='Description' {...register("shortDescription")} /> <br />
            <input className='mb-2 w-50 d-block mx-auto' placeholder='Supplier Name' type="text" {...register("supplier")} /> <br />
            <input className='mb-2 w-50 d-block mx-auto' placeholder='Price' type="number" {...register("price")} /> <br />
            <input className='mb-2 w-50 d-block mx-auto' placeholder='Photo URL' type="text" {...register("picture")} /> <br />
            <input className='w-50 d-block mx-auto' type="submit" />
        </form>
        </div>
    );
};

export default AddNewItem;