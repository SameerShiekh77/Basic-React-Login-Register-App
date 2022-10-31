import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
    return (
        <>
            <Form className='container mt-5 w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                    <Form.Text className="text-whiteclear">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" required label="Check me out" />
                </Form.Group>

                <Form.Group className='text-center'>

                    <Button variant="success" className='text-center w-75 btn-lg' type="submit">
                        Login
                    </Button>
                </Form.Group>

            </Form>


        </>
    )

}

export default Login;