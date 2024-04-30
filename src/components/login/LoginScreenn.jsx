import React from 'react'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'


const LoginScreen = () => {


    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui)
    
    const [ formValues, handleInputChange ] = useForm({
        email: 'prueba@gmail.com',
        password: '123456'
    });
    
    const { email, password } = formValues;

    const handleGoogleLogin = () => {
        console.log('Google Login TODO');
        dispatch( startGoogleLogin() );
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password));
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>

            <hr />

            <form onSubmit={ handleLogin }>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        name="password"
                        value={ password }
                        onChange={ handleInputChange }
                        />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-outline-dark w-100"
                    disabled={ loading }
                >
                    Login with email and password
                </button>
            </form>

            <div className="mt-3">
                <p>
                    or
                </p>
                <GoogleButton type='dark' onClick={ handleGoogleLogin } />
                <hr/>
                <Link to="/register"> Crear nueva cuenta </Link>
            </div>

        </div>
    )
}
export default LoginScreen
