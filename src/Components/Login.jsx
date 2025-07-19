import React, { useState } from 'react'
import Header from './Header'
import CheckValidation from '../Utils/Validate'
import { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/Firebase';

const Login = () => {

    const [signIn, setSignIn] = useState(true)
    const [Error, setError] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const Fullname = useRef(null)
   

    const ToggleSignin = () => {
        setSignIn(!signIn)
    }

    const HandleSubmit = () => {

        console.log(email.current.value)
        console.log(password.current.value)
        // console.log(Fullname.current.value)
        const massage = CheckValidation(email.current.value, password.current.value)
        setError(massage)
        if (massage) return

        if (!signIn) {


            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: Fullname.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        
                        // ...
                    }).catch((error) => {
                       setError(ErrorEvent.massage)
                    });


                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + "-" + errorMessage)
                    // ..
                });



        }
        else {



            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                  
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + "-" + errorMessage)
                });


        }
    }

    return (
        <div>
            <Header />
            <div>
                <img className='bgimg' src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg"
                    alt="Loginimg" />
            </div>
            <div className='form'>
                <form onSubmit={(e) => e.preventDefault()} className='form1'>
                    <h1>{signIn ? "Sign In" : "Sign Up"}</h1>
                    {!signIn && <input ref={Fullname} className='input' type="text" placeholder='Full Name' />}
                    <input ref={email} className='input' type="text" placeholder='Email' />
                    <input ref={password} className='input' type="Password" placeholder='Password' />
                    <p className='Error'>{Error}</p>
                    <button onClick={HandleSubmit} className='btn'>{signIn ? "Sign In" : "Sign Up"}</button>
                    <p> <b onClick={ToggleSignin}>{signIn ? "New to Netflix-GPT ? SignUp Now" : "Already Registered ? Sign In Now"}</b> </p>
                </form>
            </div>
        </div>
    )
}

export default Login  