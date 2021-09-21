import { PieChart, Pie, Cell } from 'recharts'
import './ScoreGraph.css'

const COLORS = ['#FF0000', '#F8F8F8']

export default function ScoreGraph({ value }) {
	const data = [{ value: value }, { value: 1 - value }]
	console.log(data[0].value)
	return (
		<div className="scoreGraph">
			<div className="scoreGraph__title">Score</div>
			<div className="scoreGraph__text">
				<span className="score">
					{data[0].value * 100}%
					<br />
				</span>{' '}
				de votre objectif
			</div>
			<PieChart width={260} height={260}>
				<Pie
					dataKey="value"
					data={data}
					innerRadius={60}
					outerRadius={80}
					startAngle={90}
					endAngle={450}
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
			</PieChart>
		</div>
	)
}
