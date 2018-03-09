import React, {Component} from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';

class Toolbar extends Component{


    render(){
        
        return(
            <header className={classes.Toolbar}>
                <div>Menu</div>
                <div style={{height:"80%"}}>
                    <Logo/>
                </div>
                <nav>
                    <Navigationitems/>
                </nav>
            </header>
        )
    }
}
export default Toolbar;