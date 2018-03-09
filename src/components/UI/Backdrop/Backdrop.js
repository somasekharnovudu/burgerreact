import React , {Component} from 'react';
import classes from './Backdrop.css';
import Aux from '../../../hoc/Auxillary';

class Backdrop extends Component{


    render(){
        let rendercon=null;
        if(this.props.show){
            rendercon=<div onClick={this.props.clicked} className={classes.Backdrop}></div>;
        }
        return (
            <Aux>
                {rendercon}
            </Aux>
        )
    }
}
export default Backdrop;
