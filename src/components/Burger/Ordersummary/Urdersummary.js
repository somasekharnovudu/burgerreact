import React,{Component} from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class Ordersummary extends Component{


    render(){
        const ingredients=Object.keys(this.props.ordersummary).map((key)=>{
            return (
                <li key={key}> 
                    <span style={{textTransform:"capitalize"}}>{key} :</span> 
                    {this.props.ordersummary[key]}
                </li>
            )
        })


        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A Delicious Burger with Following Ingredients :</p>
                <ul>
                    {ingredients}
                </ul>
                <p><strong>Total Price : $ {this.props.price.toFixed("2")}</strong></p>
                <p>Continue to Checkout ?</p>
                <Button click={this.props.cancel} btnType="Danger">Cancel</Button>
                <Button click={this.props.confirm} btnType="Success">Confirm</Button>
            </Aux>
        )
    }
}


export default Ordersummary;