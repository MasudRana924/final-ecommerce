import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';

const ResetPassword = () => {
    const { forgotPassword,email,handleEmail } = useAuth()
    
    return (
        <div className=' register-form'>
            <h2 className='text-dark text-start mt-2'>Reset your password</h2>
            <Form onSubmit={(event) => {
                            event.preventDefault()
                            forgotPassword(email)
                             alert('Email is sent') 
                             event.target.reset() 
                            

                        }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>
            
                <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                Confirm
                </Button>
            </Form>
        

           
        </div>
    );
};

export default ResetPassword;