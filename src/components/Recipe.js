import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        console.log(this.props.recipe);

        const {
            image_url,
            title,
            source_url,
            publisher,
            recipe_id
        } = this.props.recipe;

        return (
            <React.Fragment>
                <h1>Jestem w Recipe.js</h1>
                <img src={image_url} alt="" />
                <p>{title}</p>
                <p>Źródło: {publisher}</p>
                <button type="button">Więcej</button>
            </React.Fragment>
        )
    }
}