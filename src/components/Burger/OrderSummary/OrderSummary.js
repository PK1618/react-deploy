import React,{ Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key = {igKey}>
                    <span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        });
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {this.props.purchaseCanceled}>Cancel</Button>
            <Button btnType = "Success" clicked = {this.props.purchaseContinue}>Continue</Button>
        </Aux>
        );
    }
}

export default OrderSummary;