import { useState } from 'react';


export default function UserInput({ onInputChange }) {
	function handleInitInvestmentChange(event) {
		onInputChange('initialInvestment', event.target.value)
	}

	function handleAnnualInvestmentChange(event) {
		onInputChange('annualInvestment', event.target.value)
	}

	function handleExpectedReturnChange(event) {
		onInputChange('expectedReturn', event.target.value)
	}

	function handleDurationChange(event) {
		onInputChange('duration', event.target.value)
	}

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input id="initial-investment" onChange={ handleInitInvestmentChange } />
				</p>
				<p>
					<label>Annual Investment</label>
					<input id="annual-investment" onChange={ handleAnnualInvestmentChange } />
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input id="expected-return" onChange={ handleExpectedReturnChange } />
				</p>
				<p>
					<label>Duration</label>
					<input id="duration" onChange={ handleDurationChange } />
				</p>
			</div>
		</section>
	)
}