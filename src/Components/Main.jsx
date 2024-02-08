import React, { Component } from 'react'
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import Order from './BurgerBuilder/Order/Order'
import Checkout from './BurgerBuilder/Order/Checkout/Checkout'
import { Route, Routes, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Auth/login'
import { authCheck } from '../redux/authActionCreator'
import Logout from './Auth/Logout'
const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authCheck: () => dispatch(authCheck())
    }
}


//THis is the way to code for managing routing auth
class Main extends Component {

    componentDidMount() {
        this.props.authCheck();
    }
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route path='/login' element={this.props.token === null ? <Login /> : <Navigate to="/" />} />
                        <Route path='/' exact element={this.props.token !== null ? <BurgerBuilder /> : <Navigate to="/login" />} />
                        <Route path='/order' element={this.props.token !== null ? <Order /> : <Navigate to="/login" />} />
                        <Route path='/logout' exact element={this.props.token !== null ? <Logout /> : <Navigate to="/login" />} />
                        <Route path='/checkout' element={this.props.token !== null ? <Checkout /> : <Navigate to="/login" />} />
                        <Route path='*' element={this.props.token !== null ? <Navigate to="/" /> : <Navigate to="/login" />} />
                    </Routes>
                </div>
            </div>
        )
    }
}

//another way is for less code

// const Main = (props) => {
//     const isAuthenticated = props.token !== null;

//     const renderProtectedRoute = (Component) => {
//         return isAuthenticated ? <Component /> : <Navigate to="/login" />;
//     }

//     return (
//         <div>
//             <Header />
//             <div className='container'>
//                 <Routes>
//                     <Route path='/login' element={<Login />} />
//                     <Route path='/' exact element={renderProtectedRoute(BurgerBuilder)} />
//                     <Route path='/order' element={renderProtectedRoute(Order)} />
//                     <Route path='/checkout' element={renderProtectedRoute(Checkout)} />
//                     <Route path='*' element={renderProtectedRoute(BurgerBuilder)} />
//                 </Routes>
//             </div>
//         </div>
//     )
// }

export default connect(mapStateToProps, mapDispatchToProps)(Main)
