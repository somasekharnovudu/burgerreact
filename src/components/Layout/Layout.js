import React from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const Layout=(props)=>(
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Toolbar/>
        <Sidedrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;