export default function UserInput() {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input id="initial-investment" />
				</p>
				<p>
					<label>Annual Investment</label>
					<input id="annual-investment" />
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input id="expected-return" />
				</p>
				<p>
					<label>Duration</label>
					<input id="duration" />
				</p>
			</div>
		</section>
	)
}