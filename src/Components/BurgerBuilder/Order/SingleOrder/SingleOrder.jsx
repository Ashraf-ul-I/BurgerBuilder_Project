import React from 'react'

const SingleOrder = (props) => {
    const ingredientSummery = props.order.ingredients.map((item) => {
        return (
            <span key={item.type} style={{
                border: "1px solid grey",
                borderRadius: '5px',
                padding: '5px',
                marginRight: '10px'
            }}>{item.amount} x <span style={{ textTransform: 'capitalize' }}>{item.type}</span></span>
        )
    })
    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: '1px 1px #888888',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '10px'
        }}>
            <p> Order Number:{props.order.id}</p>
            <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
            <hr />
            {ingredientSummery}
            <hr />
            <p>Total: {props.order.price} BDT</p>


        </div>
    )
}

export default SingleOrder