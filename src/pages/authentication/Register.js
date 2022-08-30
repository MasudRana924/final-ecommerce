import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebookF,faTwitter } from '@fortawesome/free-brands-svg-icons'
import useAuth from './../../hooks/useAuth'
import './Register.css'

const Register = () => {
    const [agree, setAgree] = useState(false);
    const googleIcon = <FontAwesomeIcon icon={faGoogle} className="google-icon" />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} className="facebook-icon" />
    const {registerUser,error,handleName,handleEmail,handlePass, setUserName,setUser,name,email,pass,setError,setLoading }=useAuth()
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <>
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={(event) => {
                            event.preventDefault()
                            registerUser(email, pass,{ sendEmailVerification: true })
                                .then(result => {
                                    // setError('')
                                    // const newUser={email,displayName:name}
                                    // setUser(newUser)
                                    setUserName()
                                    alert('Account create successfully please verify your email')
                                    
                                // console.log(newUser)
                                }) 
                                .catch(error => {
                                    setError('Enter a valid email')
                                })
                                .finally(
                                );

                        }}>
                <input type="text" name="name" id="" placeholder='Your Name'required  onBlur={handleName} />

                <input type="email" name="email" id="" placeholder='Email Address' required onBlur={handleEmail} />

                <input type="password" name="password" id="" placeholder='Password' required onBlur={handlePass} />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" className="agree-checkbox"/>
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={` ps-2 ${agree ? '' : 'text-primary'}`} htmlFor="terms">Accept Deliver.fast Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-dark mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            
             <div className="social-login">
             <button className="social-login-btn">{googleIcon}</button>
             <button className="social-fb-btn">{facebookIcon} </button>
             <button className="social-twitter-btn">{twitterIcon} </button>
             </div>
             
        </div>
        
    </>
    );
};

export default Register;