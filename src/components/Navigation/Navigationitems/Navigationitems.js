import React, {Component} from 'react';
import classes from './Navigationitems.css';
import Navigationitem from './Navigationitem/Navigationitem';


class Navigationitems extends Component{

    render(){
        

        return(
            <ul className={classes.Navigationitems}>
                <Navigationitem link="/burgerbuilder">Burger Builder</Navigationitem>
                <Navigationitem link="/checkout">Checkout</Navigationitem>
            </ul>
        )
    }

}

export default Navigationitems;