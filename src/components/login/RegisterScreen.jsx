import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { startLoginEmailPassword, startRegisterEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';


const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    // const [terms, setTerms] = useState(true);


    const [ formValues, handleInputChange ] = useForm({
        name: 'Andrés',
        email: 'prueba@gmail.com',
        password: '123456',
        password2: '123456',
        terms: true
    });

    // const handleCheckboxChange = () => {
    //     setTerms(!terms)
    // }

    const { name, email, password, password2, terms } = formValues;

    const isFormValid = () => {

        if( name.trim().length < 2 ){
            // console.log('nombre requerido');
            dispatch( setError('Nombre Requerido') );
            return false;
        }else if( password.length < 6 || password !== password2){
            // console.log('Longitud mínima de 6 caracteres y ser iguales')
            dispatch( setError('Longitud mínima de 6 caracteres y ser iguales') );
            return false;
        }else if(!terms){
            dispatch( setError('Marque la casilla para continuar') );
            return false;
        }else if( !validator.isEmail( email ) ){
            // console.log('email erroneo')
            dispatch( setError('Email Erroneo') );
            return false;
        }
        dispatch(removeError());
        return true;
    }


    const handleRegister = (e) => {
        e.preventDefault();
        if( isFormValid() ){
            dispatch( startRegisterEmailPassword( email, password, name ) );
            // console.log('Formulario Correcto')

        }
        // console.log(name, email, password, password2, terms);
        // dispatch( startLoginEmailPassword('asd@mail.com', '123456'));
    }


    return (
        <div className="container mt-5">
            
            <h1>Register Screen</h1>

            <hr />

            <form onSubmit={ handleRegister }>

                {
                    msgError && (
                        <div className="alert alert-danger" role="alert">
                            { msgError }
                        </div>
                    )   
                }

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputname" 
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                        required
                        />
                </div>
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
                        required
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
                        required
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword2" 
                        name="password2"
                        value={ password2 }
                        onChange={ handleInputChange }
                        required
                        />
                </div>
                <div className="mb-3">
                    <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox"
                        name="terms"
                        checked={ terms }
                        // value={ terms }
                        id="invalidCheck2"
                        onChange={ handleInputChange }
                        required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                        Agree to terms and conditions
                    </label>
                    </div>
                </div>
                {/* <div className="mb-3">
                    <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox"
                        name="terms"
                        checked={ terms }
                        // value={ terms }
                        id="invalidCheck2"
                        onChange={ handleCheckboxChange }
                        required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                        Agree to terms and conditions
                    </label>
                    </div>
                </div> */}
                <button type="submit" className="btn btn-outline-dark w-100">Crear cuenta</button>
            </form>

            <div className="mt-3">
                <hr/>
                <Link to="/login"> Ya estoy registrado </Link>
            </div>

        </div>
    )

}

export default RegisterScreen
