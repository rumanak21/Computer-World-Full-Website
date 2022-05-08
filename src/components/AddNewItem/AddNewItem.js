import React from 'react';
import { useForm } from "react-hook-form";

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
            <h2>Add New Item</h2>
            <form className=' w-50 mx-auto'  onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
            <input className='mb-2' placeholder='Description' {...register("shortDescription")} /> <br />
            <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplier")} /> <br />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} /> <br />
            <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} /> <br />
            <input type="submit" />
        </form>
        </div>
    );
};

export default AddNewItem;