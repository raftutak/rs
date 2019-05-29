import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        const { recipes } = this.props;
        return (
            <React.Fragment>
                <h1>Jestem w RecipeList.js</h1>
                <RecipeSearch />
                <h1>Lista przepisów</h1>
                {
                    recipes.map(recipe => {
                        return (
                            <Recipe
                                key={recipe.recipe_id}
                                recipe={recipe} />
                        )
                    })
                }
            </React.Fragment>
        )
    }
}