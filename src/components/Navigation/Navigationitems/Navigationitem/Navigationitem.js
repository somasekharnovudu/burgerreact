import React , {Component} from 'react';
import classes from './Navigationitem.css';
import {NavLink} from 'react-router-dom';

class Navigationitem extends Component{


    render(){

        return(
            <li className={classes.Navigationitem}>
                <NavLink
                    to={this.props.link}
                    activeClassName={classes.active}
                >{this.props.children}</NavLink>
            </li>
        )
    }
}
export default Navigationitem;