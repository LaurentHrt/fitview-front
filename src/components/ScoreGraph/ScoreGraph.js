import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import './ScoreGraph.css'

const COLORS = ['#FF0000', '#F8F8F8']

export default function ScoreGraph({ value }) {
	const data = [{ value: value }, { value: 1 - value }]
	return (
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
	)
}
