import React, {Component} from 'react';
import Checkoutsummary from '../../components/Burger/Checkoutsummary/Checkoutsummary';

class Checkout extends Component{
    state={
        ingredients:{
            meat:1,
            salad:1,
            bacon:1,
            cheese:1
        }
    }

    render(){
        return(
            <div className="Checkout">
                <Checkoutsummary ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default Checkout;