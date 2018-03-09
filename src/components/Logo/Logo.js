import React , {Component} from 'react';
import Burgerlogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

class Logo extends Component{


    render(){

        return(
            <div className={classes.Logo} style={{height:this.props.height}}>
                <img src={Burgerlogo} alt="My Burger"/>
            </div>
        )
    }
}
export default Logo;