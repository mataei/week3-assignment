import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VacationRental extends Component {
	
    render() {
		
		const index = this.props.index;
        const vacationRental = this.props.vacationRental;

        return (
            <div className="vacationRental">
                <li>
                    <div className="vacationImage">
					  <img src={this.props.vacationRental.image}/>
					</div>
                    <h2 className="vacationTitle">{this.props.vacationRental.title}</h2>
                    <p className="vacationHouseType">House Type: {this.props.vacationRental.houseType}</p>
                    <div className="vacationLocation">
                        <div className="vacationCity">City: {this.props.vacationRental.location.city}</div>
                        <div className="vacationCountry">Country: {this.props.vacationRental.location.country}</div>
                    </div>
					<div className="vacationLocation">
                        <div className="vacationCity">Cost: ${this.props.vacationRental.payment.cost}</div>
                        <div className="vacationCountry">{this.props.vacationRental.payment.description}</div>
                    </div>
					<button onClick={() => this.props.onBookRental(index)}>Book</button>
                </li>
            </div>
        )
    }
}

VacationRental.propTypes = {
    vacationRental: PropTypes.object
}

export default VacationRental;