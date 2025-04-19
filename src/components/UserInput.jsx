import { useState } from 'react';


export default function UserInput({ onInputChange }) {
	function handleInitInvestmentChange(event) {
		// setInputs(prevInputs => {
		// 	const newInputs = { 
		// 		...prevInputs,
		// 		initialInvestment: event.target.value
		// 	}
		// 	return newInputs
		// })
		onInputChange('initialInvestment', event.target.value)
	}

	function handleAnnualInvestmentChange(event) {
		// setInputs(prevInputs => {
		// 	const newInputs = { ...prevInputs }
		// 	newInputs.annualInvestment = event.target.value
		// 	return newInputs
		// })
		onInputChange('annualInvestment', event.target.value)
	}

	function handleExpectedReturnChange(event) {
		// setInputs(prevInputs => {
		// 	const newInputs = { ...prevInputs }
		// 	newInputs.expectedReturn = event.target.value
		// 	return newInputs
		// })
		onInputChange('expectedReturn', event.target.value)
	}

	function handleDurationChange(event) {
		// setInputs(prevInputs => {
		// 	const newInputs = { ...prevInputs }
		// 	newInputs.duration = event.target.value
		// 	return newInputs
		// })
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