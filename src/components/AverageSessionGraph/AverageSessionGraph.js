import { LineChart, Line, XAxis, Tooltip } from 'recharts'
import './AverageSessionGraph.css'

export default function AverageSessionGraph({ data }) {
	const days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
	data = data.map((entry) => ({
		day: days[entry.day],
		sessionLength: entry.sessionLength,
	}))

	return (
		<LineChart
			width={500}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<XAxis dataKey="day" />
			<Tooltip />
			<Line type="monotone" dataKey="sessionLength" stroke="#FF0000" />
		</LineChart>
	)
}
