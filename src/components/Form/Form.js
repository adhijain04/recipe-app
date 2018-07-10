import React from 'react';
import './Form.css';

const Form = (props) => {
    
        return(
                    <form id="form" onSubmit={props.getRecipe}>
                        <input type='text' placeholder='Search your Recipe' name='recipeName' />
                        <button className='btn btn-danger'>Search</button>
                    </form>               
        );
    
} 

export default Form;