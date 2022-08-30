import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation,  useNavigate  } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const NewPassword = () => {
    const { handlePass, pass, resetPassword } = useAuth()
    const useQuery=()=> {
        return new URLSearchParams(useLocation().search)
      }
      const query = useQuery()
     console.log(query.get('oobCode'))
     const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className=' register-form'>
        <h2 className='text-dark text-start mt-2'>New Password</h2>
        <Form onSubmit={(event) => {
                            event.preventDefault()
                            resetPassword(query.get('oobCode'), pass)
                             alert('Email is sent')  
                             navigate('/login');
                            

                        }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control  type="password" placeholder="Password" required onBlur={handlePass}/>
            </Form.Group>
        
            <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
            Save Password
            </Button>
        </Form>
    

        
    </div>
    );
};

export default NewPassword;