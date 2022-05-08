import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignIn = () => {
    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = async (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;


        await signInWithEmailAndPassword(email, password);

        // 
    }
    return (
        <div className='m-5 w-50 mx-auto'>
            <h2 className='mb-3' > Sign In Here</h2>
            <form onSubmit={handleSignIn}>
              <input className=' w-50 mx-auto mb-2 text-center' type="email" name="email" id="2" placeholder='Email Address' required /> <br />

                <input className=' w-50 mx-auto mb-2 text-center' type="password" name="password" id="3" placeholder='Password' required /> <br />



                <input

                    className='btn btn-primary mt-2 w-50 mx-auto'
                    type="submit"
                    value="Sign In" />
            </form>


        </div>
    );
};

export default SignIn;