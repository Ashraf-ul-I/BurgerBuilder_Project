import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { Navigate } from 'react-router-dom'; // Import the Navigate component
import { connect } from 'react-redux'
import axios from 'axios';
import Spinner from '../../../spinner/Spinner'
import { resetIngredients } from '../../../../redux/actionCreator';
const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetIngredients: () => dispatch(resetIngredients()),
    }
} //After submittion the Order EveryTime it will reset The previous Order Settting

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: '',
            phone: '',
            paymentType: 'Cash On Delivery'
        },
        onClickCheck: false,
        isLoading: false,
        isModalOpen: false,
        modalMsg: ""
    }


    inputChangerHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }
    handleHome = () => {
        this.setState({
            onClickCheck: true
        });
    }




    submitHandle = () => {
        this.setState({
            isLoading: true,
        })
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
        }
        axios.post("https://burger-builder-57520-default-rtdb.firebaseio.com/orders.json", order) //jokhoni firebase e kaj korbo tokhn key er shes .json use korte hobe
            .then(response => {
                if (response.status === 200) {

                    this.setState(
                        {
                            isLoading: false,
                            isModalOpen: true,
                            modalMsg: 'Order Places Succesfully'
                        }
                    )
                    this.props.resetIngredients();
                } else {
                    this.setState(
                        {
                            isLoading: false,
                            isModalOpen: true,
                            modalMsg: 'Order Not Placed! Order Again'
                        }
                    )
                }

            })
            .catch(err => {
                this.setState(
                    {
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: 'Order Not Placed'
                    }
                )
            });
    }

    render() {
        let form = (<div>
            <h4 style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px",
            }}>Payment :{this.props.totalPrice} BDT</h4>
            <form action="" style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px",
            }}>
                <textarea className='form-control' name="deliveryAddress" id="" cols="30" rows="10" onChange={(e) => this.inputChangerHandler(e)} value={this.state.values.deliveryAddress} placeholder='Your Address' ></textarea> <br />

                <input type="phone" name='phone' className='form-control' value={this.state.values.phone} onChange={(e) => this.inputChangerHandler(e)} placeholder='Your Phone Number' />
                <br />
                <select name="paymentType" className='form-control' onChange={(e) => this.inputChangerHandler(e)} value={this.state.values.paymentType}>
                    <option value="Cash On Delivery">Cash On Delivery</option>
                    <option value="Bkash">Bkash</option>
                </select><br />
                <Button style={{ backgroundColor: '#D70F64' }} className='mr-auto' disabled={!this.props.purchasable} onClick={this.submitHandle}>Place Order</Button>
                <Button style={{ backgroundColor: 'grey' }} className='ml-1' onClick={this.handleHome}>Cancel</Button> {/* Update onClick event */}

            </form>
            {this.state.onClickCheck && <Navigate to='/' replace={true} />}
        </div>)
        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} onClick={this.handleHome}>
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
