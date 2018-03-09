import React , {Component} from 'react';
import classes from './Navigationitem.css';

class Navigationitem extends Component{


    render(){

        return(
            <li className={classes.Navigationitem}>
                <a 
                    href={this.props.link}
                    className={this.props.active?classes.active:null}
                >{this.props.children}</a>
            </li>
        )
    }
}
export default Navigationitem;