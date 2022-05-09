import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignIn = () => {
    let errorElement;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,

    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, {replace: true})
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    console.log(error)

    const handleSignIn = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;


        await signInWithEmailAndPassword(email, password);

    }
    return (
        <div className='m-5 w-50 mx-auto'>
            <h2 className='mb-3  text-center' > Sign In Here</h2>
            <form onSubmit={handleSignIn}>
                <input className=' w-50 d-block mx-auto  text-center' type="email" name="email" id="2" placeholder='Email Address' required /> <br />

                <input className=' w-50 d-block mx-auto text-center' type="password" name="password" id="3" placeholder='Password' required /> <br />



                <input

                    className='btn btn-primary w-50 d-block mx-auto'
                    type="submit"
                    value="Sign In" />
            </form>

            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info mt-5 w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                <span className='px-2'> Sign In With Google</span>
            </button>
            {errorElement}

        </div>
    );
};

export default SignIn;