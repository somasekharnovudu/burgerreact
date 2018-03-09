import React, {Component} from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';

class Toolbar extends Component{


    render(){
        
        return(
            <header className={classes.Toolbar}>
                <div>Menu</div>
                <Logo/>
                <Navigationitems/>
            </header>
        )
    }
}
export default Toolbar;