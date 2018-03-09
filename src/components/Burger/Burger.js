import React from 'react';
import classes from './Burger.css';
import Burgeringredient from './BurgerIngredients/Burgeringredient';


const Burger =(props)=>{

    let transformedObj=Object.keys(props.ingredients);

    transformedObj=transformedObj.map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,index)=>{
            return <Burgeringredient key={igkey+index} type={igkey}/>
        })
    })
    

    const maper=transformedObj.reduce((arr,el)=>{
        return arr.concat(el); 
    },[])
    
    if(maper.length==0){
        transformedObj=(
            <p>Please Start Adding Ingredients</p>
        )
    }

    return(
       <div className={classes.Burger}>

        <Burgeringredient type="bread-top"/>
        {transformedObj}
        <Burgeringredient type="bread-bottom"/>
       </div>
    )
}


export default Burger;