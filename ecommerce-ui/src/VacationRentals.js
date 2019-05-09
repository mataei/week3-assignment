import React, { Component } from 'react';
import PropTypes from 'prop-types';
import airbnbs from './_data/airbnbs.json';
import VacationRental from './VacationRental';
import ShoppingCart from './ShoppingCart';

class VacationRentals extends Component {
	
  constructor(props){
		super(props);
		this.state = {
			rentals: airbnbs,
			selectedRentals: [],
			totalRental:0
		}
  }
  
  bookRental = (index) => {
    const selectedRental = this.state.rentals[index];
	let newRental = this.state.totalRental + selectedRental.payment.cost;
    if (this.state.selectedRentals.includes(selectedRental)) {
      alert('You already selected this rental.');
      return;
    }
    
    this.setState(prevState => {
      return {
        selectedRentals: [...prevState.selectedRentals, selectedRental],
        totalRental: newRental
	  };
    });
  }

  deleteRental = (index) => {    
    this.setState(prevState => {
      const selectedRentals = [...prevState.selectedRentals];
	  let newRental = this.state.totalRental - selectedRentals[index].payment.cost;
      selectedRentals.splice(index, 1);

      return {
        selectedRentals,
		totalRental: newRental
      };
    });
  }
  

  render() {
    const rentals = airbnbs.map((vacationRental, index) => {
		return (
		<VacationRental vacationRental={vacationRental} 
						index={index}
		                key={index}
						onBookRental={this.bookRental}/>);
	});	
    
	return (
	<div className="App">
	<div id="shoppingCart">
        <h1>
		  <span>Shopping Cart</span>
		</h1>
	  <span>Total Cost: ${this.state.totalRental}</span>   
            <ShoppingCart
                rentals={this.state.selectedRentals}
                onDeleteRental={this.deleteRental}
            />
	</div>
      <div id="vacationRentals">
        <h1>
		  <span>Explore Airbnb</span>
		</h1>
        <ul id="airbnbs" className="allVacationRentals">{rentals}</ul>
      </div>
	</div>
    );
  }
}

VacationRental.propTypes = {
    rentals: PropTypes.object,
	selectedRentals: PropTypes.object,
	totalRental: PropTypes.number
}

export default VacationRentals;
