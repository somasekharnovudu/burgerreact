import React, {Component} from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component{

    state={
        showSideDrawer:false,
    }
    swicthChangerHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    sideDrawToggle=()=>{
        this.setState((prevState)=>(
            this.setState({showSideDrawer:!prevState.showSideDrawer})
        ))
    }
    render(){
        return (
            <Aux>
                <Toolbar drawertoggleclicked={this.sideDrawToggle} />
                <Sidedrawer closed={this.swicthChangerHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;