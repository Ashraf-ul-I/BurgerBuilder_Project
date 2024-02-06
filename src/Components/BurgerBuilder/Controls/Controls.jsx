import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap'
const Controls = (props) => {

    const controls = [
        {
            label: 'Salad', type: 'salad',
        },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },

    ]

    const BuildControls = (props) => {
        return (
            <div className='d-flex justify-between align-center'>
                <div style={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                }}>
                    {props.label}
                </div>

                <div>
                    <button className='btn btn-danger btn-sm m-1' onClick={props.remove}>Less</button>
                    <button className='btn btn-success btn-sm m-1' onClick={props.added}>More</button>
                </div>
            </div>
        )
    }



    return (
        <div className='container ml-md-5 ' style={{
            textAlign: 'center',

        }}>
            <Card style={{
                marginTop: '30px',
                marginBottom: '30px',
                textAlign: 'center'
            }}>
                <CardHeader style={{
                    backgroundColor: '#DF0764',
                    color: 'white'
                }}><h4>Add Ingredients</h4></CardHeader>
                <CardBody>

                    {controls.map(item => {
                        return <BuildControls
                            label={item.label}
                            type={item.type}
                            key={Math.random()}
                            added={() => props.ingredientAdded(item.type)}
                            remove={() => props.removeIngredient(item.type)} />
                    })}

                </CardBody>
                <CardFooter>
                    <h5>Price: <strong>{props.price}</strong> BDT</h5>
                    <Button disabled={!props.purchasable} onClick={props.toggleModle} style={{ backgroundColor: '#DF0764' }}>Order Now</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Controls