import React from 'react'
import {Link as NavLink} from 'react-router-dom'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

const Header = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>BookMyTicket</NavLink>
                    <form className="d-flex w-50"  role="search">
                        <input className="form-control me-2" type="search" placeholder='Search for Movies'aria-label="Search" />
                    </form>
                    <Login />
                    <Signup/>
                </div>
            </nav>
        </>
    )
}

export default Header