import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger 
                    clicked
                    ingredients={props.ingredients}/>
            </div>
            <Button 
                clicked
                btnType="Danger">CANCEL</Button>
            <Button btnType="Success">CHECKOUT</Button>
        </div>
    )
}

export default checkoutSummary;