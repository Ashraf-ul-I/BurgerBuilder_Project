import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,

} from 'reactstrap'

import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/BurgerBrand.avif'

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}


const Header = (props) => {


    let links = null;
    if (props.token === null) {
        links = (
            <Nav className='mr-md-5' >

                <NavItem>
                    <NavLink to='/login' className={({ isActive }) =>
                        `mr-5 mb-5 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    } style={{ color: 'white', fontWeight: 'bold' }}>
                        Login
                    </NavLink>
                </NavItem>
            </Nav>

        )

    } else {
        links = (
            (
                <Nav className='mr-md-5' >
                    <NavItem >
                        <NavLink to='/' className={({ isActive }) =>
                            `mr-5 mb-5 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        } style={{ color: 'white', fontWeight: 'bold', }}
                        >
                            Burger Builder
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/order' className={({ isActive }) =>
                            `mr-5 mb-5 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        } style={{ color: 'white', fontWeight: 'bold' }}>
                            Orders
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/logout' className={({ isActive }) =>
                            `mr-5 mb-5 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        } style={{ color: 'white', fontWeight: 'bold' }}>
                            Logout
                        </NavLink>
                    </NavItem>

                </Nav>

            )
        )


    }

    return (
        <div className='Navigation'>
            <Navbar style={{
                backgroundColor: '#D70f64',
                height: '70px'
            }
            }>
                <NavbarBrand href='' className='mr-auto ml-md-5 Brand ' >
                    <img src={Logo} alt="burgerBrand" width='80px' />
                </NavbarBrand>

                {links}

            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header)