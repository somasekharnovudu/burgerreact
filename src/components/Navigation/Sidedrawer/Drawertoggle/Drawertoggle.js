import React , {Component} from 'react';
import classes from './Drawertoggle.css';

class Drawertoggle extends Component{


    render(){


        return(
            <div onClick={this.props.clicked} className={classes.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}
export default Drawertoggle;