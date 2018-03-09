import React from 'react';
import classes from './Buildcontrols.css';
import Buildcontrol from './Buildcontrol/Buildcontrol';

const controls=[
    {label:"Salad",type:"salad"},
    {label:"Meat",type:"meat"},
    {label:"Bacon",type:"bacon"},
    {label:"Cheese",type:"cheese"},
];

const Buildcontrols=(props)=>{

    return (
        <div className={classes.Buildcontrols}> 
            <p>Current Price : <strong>$.{props.price.toFixed(2)}</strong></p>
            {
                controls.map((ctrl)=>(
                    <Buildcontrol 
                        key={ctrl.label} 
                        label={ctrl.label}
                        added={()=>{props.ingredientAdded(ctrl.type)}}    
                        removed={()=>{props.ingredientremoved(ctrl.type)}}
                        disabled={props.disabled[ctrl.type]}
                    />
                ))
            }
            <button className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default Buildcontrols;