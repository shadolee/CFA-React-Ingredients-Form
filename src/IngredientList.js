import React, { Component } from 'react';
import PropTypes from 'prop-types';

const IngredientList = (props) => {
  // using const instead of class here as simpler so less can go wrong
  // don't need () if on one line
  return (
    <ul>
      { props.ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}

    </ul>
  )
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default IngredientList;
