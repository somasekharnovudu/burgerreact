import React, {Component} from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary';

class Sidedrawer extends Component{

    attachedClasses=[classes.Sidedrawer,classes.Close];
    componentWillReceiveProps(){
        this.attachedClasses=(this.props.open)?[classes.Sidedrawer,classes.Close]:[classes.Sidedrawer,classes.Open]
    }
    componentWillUpdate(){
      
        this.attachedClasses=(this.props.open)?[classes.Sidedrawer,classes.Close]:[classes.Sidedrawer,classes.Open]
    }

    render(){    

        return(
            <Aux>
                <Backdrop className={classes.drop} clicked={this.props.closed} show={this.props.open}/>
                <div className={this.attachedClasses.join(" ")}> 
                    <div style={{height:"11%",marginBottom:"20px"}}>
                        <Logo />
                    </div>
                    <nav>
                        <Navigationitems />
                    </nav>
                </div>
            </Aux>

        )
    }
}
export default Sidedrawer;