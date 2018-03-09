import React, {Component} from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitem/Navigationitem';
import classes from './Sidedrawer.css';

class Sidedrawer extends Component{


    render(){
        return(
            <div className={classes.Sidedrawer}> 
                <div style={{height:"11%"}}>
                    <Logo />
                </div>
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        )
    }
}
export default Sidedrawer;