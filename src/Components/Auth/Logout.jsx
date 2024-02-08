import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../redux/authActionCreator';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }

    render() {
        return (
            <div>
                <Navigate to='/' />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout)
