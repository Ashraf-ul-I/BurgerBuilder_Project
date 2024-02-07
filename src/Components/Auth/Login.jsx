import React, { Component } from 'react'
import { Formik } from 'formik'

class Login extends Component {
    render() {
        return (
            <div >
                <Formik initialValues={
                    {
                        email: '',
                        password: '',
                        passwordConfirm: ''
                    }
                }
                    onSubmit={
                        (values) => {
                            console.log(values);
                        }
                    }
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email Address';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 4) {
                            errors.password = 'Must be atleast 4 characters';

                        }

                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = "Password field does Not Matched"
                        }

                        return errors;
                    }}
                >

                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={
                            {
                                border: '1px grey solid',
                                padding: '15px',
                                borderRadius: '7px',

                            }
                        }>
                            <form onSubmit={handleSubmit}>
                                <input
                                    name='email'
                                    placeholder='Enter Your Email'
                                    className='form-control'
                                    value={values.email}

                                    onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors.email}</span>
                                <br />
                                <input
                                    name='password'
                                    placeholder='Enter Your password'
                                    className='form-control'
                                    value={values.password}
                                    onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors.password}</span>
                                <br />
                                <input
                                    name='passwordConfirm'
                                    placeholder='Confirm Password'
                                    className='form-control'
                                    value={values.passwordConfirm}
                                    onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors.passwordConfirm}</span>
                                <br />
                                <button type='submit' className='btn btn-success'>Sign Up</button>

                            </form>
                        </div>
                    )}

                </Formik>
            </div>
        )
    }
}

export default Login;