import React from 'react';
import { useForm } from "react-hook-form";

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />
            <input placeholder='Description' {...register("description")} />
            <input placeholder='Supplier Name' type="text" {...register("supplier")} />
            <input placeholder='Price' type="text" {...register("price")} />
            <input placeholder='Photo URL' type="text" {...register("url")} />
            <input type="submit" />
        </form>
    );
};

export default AddNewItem;