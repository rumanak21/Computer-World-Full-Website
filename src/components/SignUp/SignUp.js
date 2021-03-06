import React from 'react';

import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    

    const [
        createUserWithEmailAndPassword,
        
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = async (event) => {
        event.preventDefault();
       
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);

        
    }

    return (
        <div className='m-5 w-50 d-block mx-auto'>
            <h2 className='text-center'> Sign UP Here</h2>
            <form onSubmit={handleRegister}>
                <input className='w-50 d-block mx-auto mb-2 text-center' type="text" name="name" id="1" placeholder='Full Name' /> <br />

                <input className=' w-50 d-block mx-auto mb-2 text-center' type="email" name="email" id="2" placeholder='Email Address' required /> <br />

                <input className=' w-50 d-block mx-auto mb-2 text-center' type="password" name="password" id="3" placeholder='Password' required /> <br />



                <input

                    className='btn btn-primary mt-2 w-50 d-block mx-auto'
                    type="submit"
                    value="Register" />
            </form>


        </div>
    );
};

export default SignUp;