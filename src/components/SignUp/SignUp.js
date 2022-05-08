import React from 'react';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        
    };
    
    return (
        <div  >
            <h2 className='text-center text-success m-5' >SIgn Up Here</h2>
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

export default SignUp;