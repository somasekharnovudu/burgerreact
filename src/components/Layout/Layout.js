import React from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout=(props)=>(
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;