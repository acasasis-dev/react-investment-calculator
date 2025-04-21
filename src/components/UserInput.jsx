export default function UserInput({ onInputChange }) {
	function handleInputChange(key, value) {
		onInputChange(key, value)
	}

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						onChange={ event => {
							handleInputChange('initialInvestment', event.target.value) 
						}} 
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input 
						onChange={ event => {
							handleInputChange('annualInvestment', event.target.value)
						}}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input
						onChange={ event => {
							handleInputChange('expectedReturn', event.target.value)
						}}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						onChange={ event => {
							handleInputChange('duration', event.target.value)
						}}
					/>
				</p>
			</div>
		</section>
	)
}