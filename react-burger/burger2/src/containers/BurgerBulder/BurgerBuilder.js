
import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../componets/Burger/Burger';
import BuildControls from '../../componets/Burger/BuildControls/BuildControls'
//import BuildControl from '../../componets/Burger/BuildControls/BuildControl/BuildControl';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
        totalPirce: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPirce;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPirce: newPrice, ingredients: updatedIngredients })

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPirce;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPirce: newPrice, ingredients: updatedIngredients })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;

        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRomoved={this.removeIngredientHandler}
                    disabed={disableInfo}
                />

            </Aux>
        );
    }
}

export default BurgerBuilder;