import React from 'react'
import BreadTop from '../../../assets/top.png'
import BreadBottom from '../../../assets/bottom.png'
import Salad from '../../../assets/salad.png'
import Cheese from '../../../assets/cheese.png'
import Meat from '../../../assets/meat.png'
import './Ingredient.css'
const Ingredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div> <img src={BreadBottom} alt="Bread Bottom" /></div>
            break;
        case 'bread-top':
            ingredient = <div> <img src={BreadTop} alt="Bread Top" /></div>
            break;
        case 'salad':
            ingredient = <div><img src={Salad} alt="Salad" /></div>
            break;
        case 'cheese':
            ingredient = <div><img src={Cheese} alt="cheese" /></div>
            break;
        case 'meat':
            ingredient = <div><img src={Meat} alt="meat" /></div>
            break;
        default:
            ingredient = null;
    }
    return (
        <div className='Ingredient'>{ingredient}</div>
    )
}

export default Ingredient; 