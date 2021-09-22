import { LineChart, Line, XAxis, Tooltip } from 'recharts'
import './AverageSessionGraph.css'

const axisTextStyle = { fontWeight: 'bold', fontSize: '12px' }

export default function AverageSessionGraph({ data }) {
	const days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
	data = data.map((entry) => ({
		day: days[entry.day],
		sessionLength: entry.sessionLength,
	}))

	return (
		<div className="sessionGraph">
			<div className="sessionGraph__title">
				Durée moyenne des sessions
			</div>
			<LineChart
				data={data}
				margin={{
					top: 50,
					right: 15,
					left: 15,
					bottom: 5,
				}}
				width={260}
				height={260}
				style={axisTextStyle}
			>
				<XAxis
					dataKey="day"
					tickLine={false}
					axisLine={false}
					tick={{ fill: '#FFFFFF' }}
				/>
				<Tooltip
					itemStyle={{
						color: 'black',
					}}
					formatter={(value, name, unit) => [value, unit]}
					labelStyle={{ display: 'none' }}
				/>
				<Line
					type="monotoneX"
					dataKey="sessionLength"
					stroke="white"
					unit="min"
					dot={false}
					strokeWidth={2}
				/>
			</LineChart>
		</div>
	)
}
