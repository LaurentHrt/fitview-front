import { PieChart, Pie, Cell } from 'recharts'
import './ScoreGraph.css'

const COLORS = ['#FF0000', '#F8F8F8']

export default function ScoreGraph({ value }) {
	const data = [{ value: value }, { value: 1 - value }]
	return (
		<div>
			<PieChart width={300} height={300}>
				<Pie
					dataKey="value"
					data={data}
					cx={100}
					cy={200}
					innerRadius={60}
					outerRadius={80}
					startAngle={90}
					endAngle={450}
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
			<p>{value * 100}% de votre objectif</p>
		</div>
	)
}
