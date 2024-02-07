import React from 'react'
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import Order from './BurgerBuilder/Order/Order'
import Checkout from './BurgerBuilder/Order/Checkout/Checkout'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/login'
const Main = (props) => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<BurgerBuilder />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>

        </div>
    )
}

export default Main