import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

const Navbar = () => {

    const navigate = useNavigate()
    // const { user, dispatch } = useContext( AuthContext );
    const dispatch = useDispatch()

    const handleLogout = () => {

        dispatch( startLogout() );

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Navbar
                </Link>

          
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <NavLink 
                            className={ ({ isActive }) => 'nav-link ' + (isActive? 'active' : '')}
                            to="/dc">
                                DC
                        </NavLink>
                        
                        <NavLink 
                            className={ ({ isActive }) => 'nav-link ' + (isActive? 'active' : '')} 
                            to="/marvel"
                        >
                                Marvel
                        </NavLink>
                        <NavLink 
                            className={ ({ isActive }) => 'nav-link ' + (isActive? 'active' : '')} 
                            to="/search">
                                Search
                        </NavLink>
                    
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-info">
                            {/* { user.name } */}
                        </span>
                        <button 
                            className="nav-item nav-link btn"
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>


        </nav>
    )
}

export default Navbar
