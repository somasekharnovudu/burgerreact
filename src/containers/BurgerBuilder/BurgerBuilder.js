import React , {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary';

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
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }
    
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchaseClosed=()=>{
        this.setState({purchasing:false})
    }

    updatepurchasestate=(updatedIngredient)=>{
        let ind={...updatedIngredient};
        const sum=Object.keys(ind).map((key)=>{
            return ind[key];
        })
        .reduce((a,b)=>{return a+b},0);
        this.setState({purchasable:sum>0});
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
        this.updatepurchasestate(updatedIngredient);
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
        this.updatepurchasestate(updatedIngredient);

    }
    purchaseconfirm=()=>{
        alert("you continue!!")
    }
    purchasecancel=()=>{
        this.purchaseClosed();
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseClosed}>
                    <Ordersummary 
                        ordersummary={this.state.ingredients}
                        confirm={this.purchaseconfirm}    
                        cancel={this.purchasecancel}    
                        price={this.state.totalPrice}
                    />    
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <Buildcontrols
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredienHandler}
                    ingredientremoved={this.removeIngredienHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordernow={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;