import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class IngredientForm extends Component {

  handleInputChange(e) {
    console.log(e.target.value)
  };

  focus() {
    this.nameInput.focus();
  };

  newIngredient() {
    const URL = 'http://yamagucci.herokuapp.com/api/ingredients?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3VoZWkueWFtYXVjaGlAbGl2ZS5jb20iLCJpYXQiOjE0OTQ5OTMxMTV9.G0ctQghRRAqaZiGSZyT5Oi-YXUUfb3UsYQpsmMaVA0k';
    axios.post(URL + '&name=' + this.nameInput.value)
    .then((response)=> {
      console.log(response);
      // fix this to remove input value
      this.nameInput.value = '';
      this.props.getIngredientList();
    })
    .catch(function(error) {
      console.log(error)
    });
  };

  render() {
    return(
      <div>
        <input type="text"
          ref={(input) => { this.nameInput = input; }}
          onChange={ (e) => this.handleInputChange(e) } />
        <button onClick={() => this.newIngredient()} >Create!!</button>
      </div>
    )
  };
}

IngredientForm.propTypes = {
  getIngredientList: PropTypes.func.isRequired
}

export default IngredientForm;
