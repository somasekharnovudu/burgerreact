import React, {Component} from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import Drawertoggle from '../Sidedrawer/Drawertoggle/Drawertoggle';

class Toolbar extends Component{


    render(){
        
        return(
            <header className={classes.Toolbar}>
                <Drawertoggle clicked={this.props.drawertoggleclicked}/>
                <div style={{height:"80%"}}>
                    <Logo/>
                </div>
                <nav className={classes.desktoponly}>
                    <Navigationitems />
                </nav>
            </header>
        )
    }
}
export default Toolbar;