export default function UserInput({ onInputChange, inputs }) {
	function handleInitInvestmentChange(event) {
		inputs.initial_investment = event.target.value
		onInputChange(inputs)
	}

	function handleAnnualInvestmentChange(event) {
		inputs.annual_investment = event.target.value
		onInputChange(inputs)
	}

	function handleExpectedReturnChange(event) {
		inputs.expected_return = event.target.value
		onInputChange(inputs)
	}

	function handleDurationChange(event) {
		inputs.duration = event.target.value
		onInputChange(inputs)
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