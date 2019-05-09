import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VacationRental from './VacationRental';

class ShoppingCart extends Component {

  render() {
	  
	const rentals = this.props.rentals.map((vacationRental, index) => {
		return (<li key={index}>
				<span>{vacationRental.title}</span>
                        &nbsp; &nbsp; &nbsp; &nbsp;<button onClick={() => this.props.onDeleteRental(index)}>Delete</button>
                </li>);
	});	
    
    return (
      <div>
        <ul id="cart" className="allShoppings">{rentals}</ul>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
    rentals: PropTypes.object
}

export default ShoppingCart;
