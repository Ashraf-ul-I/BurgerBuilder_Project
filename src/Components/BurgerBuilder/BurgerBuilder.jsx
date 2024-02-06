import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summery from "./Summery/Summery";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

import { addIngredient, removeIngredient, updatePurchasable } from '../../redux/actionCreator'

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable

    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable())
    }
}

class BurgerBuilder extends Component {

    state = {
        modalOpen: false,
        onClickCheck: false,

    }


    addIngredientHandle = type => {
        this.props.addIngredient(type);
        this.props.updatePurchasable();
    }

    removeIngredientsHandle = type => {
        this.props.removeIngredient(type);
        this.props.updatePurchasable();
    }

    toggleModle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    handleCheckout = () => {
        this.setState({
            onClickCheck: true
        })
    }


    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        removeIngredient={this.removeIngredientsHandle}
                        price={this.props.totalPrice}
                        toggleModle={this.toggleModle}
                        purchasable={this.props.purchasable}

                    />

                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>
                        Your Order Summery
                    </ModalHeader>
                    <ModalBody>
                        <h5>Total Price:{this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summery ingredients={this.props.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: '#DF0764' }} onClick={this.handleCheckout}>COntinue To Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModle}>Cancel</Button>
                    </ModalFooter>
                    {this.state.onClickCheck && <Navigate to='/checkout' replace={true} />}
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);