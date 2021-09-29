import { LineChart, Line, XAxis, Tooltip } from 'recharts'
import './AverageSessionGraph.css'
import PropTypes from 'prop-types'

const axisTextStyle = { fontWeight: 'bold', fontSize: '12px' }

export default function AverageSessionGraph({ data }) {
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

AverageSessionGraph.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			day: PropTypes.number.isRequired,
			sessionLength: PropTypes.number.isRequired,
		})
	).isRequired,
}
