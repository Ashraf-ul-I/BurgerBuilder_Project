import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchOrders } from '../../../redux/actionCreator'
import SingleOrder from './SingleOrder/SingleOrder'
import Spinner from '../../spinner/Spinner'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr
    }
}

class Order extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        let orders = null;

        if (this.props.orderErr) {
            orders = <p
                style={{
                    border: "1px solid grey",
                    borderRadius: '5px',
                    padding: '5px',
                    marginRight: '10px'
                }}>Sorry Failed to Load Orders..!</p>

        } else {
            if (this.props.orders.length === 0) {
                orders = <p
                    style={{
                        border: "1px solid grey",
                        borderRadius: '5px',
                        padding: '5px',
                        marginRight: '10px'
                    }}>You Have No Orders..!</p>


            } else {
                orders = this.props.orders.map((order) => {
                    return <SingleOrder order={order} key={order.id} />
                })

            }

        }


        return (
            <div>
                {this.props.orderLoading ? <Spinner /> : orders}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)