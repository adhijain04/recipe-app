import React from 'react';
import './Cards.css';

const Cards = (props) => {
    return(
        <div className='container'>
            <div className='row'>
                {props.recipes.map((recipe) => {
                    return (

                        <div className='col-md-4 my-3' key={recipe.recipe_id}>
                            <div className="card"  style={{width: '18rem'}}>
                                <img className="card-img-top img-fluid" src={recipe.image_url} alt={recipe.title} />
                                <div className="card-body">                                
                                    <p className="card-text title">{recipe.title}
                                        {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 10)}...`}
                                    </p>
                                    <p className="card-text"><span className='para'>PUBLISHER: </span>{recipe.publisher}</p>
                                    <a href=" " className="btn btn-danger">VIEW RECIPE</a>
                                </div>
                            </div>
                        
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Cards;