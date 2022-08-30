import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faGoogle,faFacebookF,faTwitter } from '@fortawesome/free-brands-svg-icons'
import useAuth from './../../hooks/useAuth';

const Login = () => {
     const googleIcon = <FontAwesomeIcon icon={faGoogle} className="google-icon" />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
     const twitterIcon = <FontAwesomeIcon icon={faTwitter} className="facebook-icon" />
     const {  error, handleEmail, handlePass, setError, logInUser, email, pass } = useAuth()
    return (
        <div className=' register-form'>
            <h2 className='text-dark text-center mt-2'>Please Login</h2>
            <Form onSubmit={(e) => {
                        e.preventDefault()
                       logInUser(email, pass)
                       .then(result => {
                        
                        setError('')
                        console.log(email,pass)
                    })
                    .catch(error => {
                        setError('Email or Password is not valid')
                    })
                    .finally(
                    );
                    }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="email" placeholder="Enter email" required onBlur={handleEmail}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  type="password" placeholder="Password" required onBlur={handlePass}/>
                </Form.Group>
                <p className="text-start text-danger"> {error}</p>
                <Link to="/resetpassword" className="text-decoration-none text-start "><p className="ms-1">Forget Password?</p></Link>
                <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            
            <p>New to Deliver.fast? <Link to="/signup" className='text-primary pe-auto text-decoration-none' >Please Signup</Link> </p>
            
            <div className="social-login">
                 <button className="social-login-btn">{googleIcon}</button>
                 <button className="social-fb-btn">{facebookIcon} </button>
                 <button className="social-twitter-btn">{twitterIcon} </button>
                 </div>

           
        </div>
    );
};

export default Login;