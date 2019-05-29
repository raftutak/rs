import React, { Component } from 'react'
import { recipe } from '../tempDetails';

export default class RecipeDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipe: recipe,
            url: "https://www.food2fork.com/api/get?key=76f5b0fe8573ffd0a055c19d34665700&rId=${this.props.id}"
        }
    }
    render() {
        console.log(this.state);

        const {
            image_url,
            title,
            source_url,
            publisher,
            publisher_url,
            recipe_id,
            ingredients
        } = this.state.recipe;

        return (
            <React.Fragment>
                <h1>Jestem w RecipeDetails.js</h1>
                <button type="button">Wróć do listy</button>
                <img src={image_url} alt="" />
                <p>{title}</p>
                <p>{source_url}</p>
                <p>{publisher}, {publisher_url}</p>
                <p>{recipe_id}</p>
                <ul>
                    {
                        ingredients.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}