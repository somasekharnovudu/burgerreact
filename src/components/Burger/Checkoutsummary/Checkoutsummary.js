 import React, {Component} from 'react';
import Burger from '../Burger';
import Button from '../../UI/Button/Button';
import classes from './Checkoutsummary.css';

 class Checkoutsummary extends Component{



    render(){
        return (
            <div className={classes.Checkoutsummary}>
                <h1>We Hope it tastes well!</h1>
                <div style={{width:"100%",height:"500px",margin:"auto"}}>
                    <Burger ingredients={this.props.ingredients}/>
                </div>
                <Button btnType="Danger" click>Cancel</Button>
                <Button btnType="Success" click>Continue</Button>
            </div>
        )
    }

 }
 export default Checkoutsummary