import React , {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7,
}

class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad:0,
            bacon:0,
            meat:0,
            cheese:0
        },
        totalPrice:4
    }

    addIngredienHandler=(type)=>{
        let updatedIngredient={
            ...this.state.ingredients
        }
        updatedIngredient[type]++;
        this.setState({ingredients:updatedIngredient});

        const priceaddition=INGREDIENT_PRICES[type];
        let newprice=this.state.totalPrice+priceaddition;
        this.setState({totalPrice:newprice});
    }
    removeIngredienHandler=(type)=>{
        let updatedIngredient={
            ...this.state.ingredients
        }
        if(updatedIngredient[type]!==0){
            updatedIngredient[type]--;

            const priceaddition=INGREDIENT_PRICES[type];
            let newprice=this.state.totalPrice-priceaddition;
            this.setState({totalPrice:newprice,ingredients:updatedIngredient});
        }

        
    }

    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let each in disabledInfo){
            disabledInfo[each] = disabledInfo[each]<=0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Buildcontrols
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredienHandler}
                    ingredientremoved={this.removeIngredienHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;