import React from 'react'

const Summery = (props) => {
    const ingredientsSummery = props.ingredients.map((item) => {
        return (
            <li key={item.type}>
                <span style={{ textTransform: "capitalize" }}>{item.type}</span>:{item.amount}
            </li>
        )
    })
    return (
        <div>
            <ul>
                {ingredientsSummery}
            </ul>
        </div>
    )
}

export default Summery