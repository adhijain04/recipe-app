import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import './App.css';

const API_KEY='41c0a576b08ce93cf7afc3052ad28aa8';

class App extends Component {

  state= {
    recipes : []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes );
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 id="heading">Recipe Search</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <Form getRecipe={this.getRecipe}/>
              <Cards recipes={this.state.recipes} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
