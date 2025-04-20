import { formatter } from "../util/investment";


export default function Result({ results }) {
	let totalInterest = 0;
	return (
		<>
			<table id="result">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{ results.map(result => {
						return (
							<tr key={ result.year }>
								<td>{ result.year }</td>
								<td>{ formatter.format(result.investmentValue) }</td>
								<td>{ formatter.format(result.interest) }</td>
								<td>{ formatter.format(result.totalInterest) }</td>
								<td>{ formatter.format(result.investedCapital) }</td>
							</tr>
						)
					}) }
				</tbody>
			</table>
		</>
	)
}