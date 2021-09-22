import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'
import './ActivityGraph.css'
import PropTypes from 'prop-types'

const textStyle = { color: '#74798C', fontWeight: 'bold', fontSize: '14px' }
const renderLegendStyle = (value) => {
	return <span style={textStyle}>{value}</span>
}

export default function ActivityGraph({ data }) {
	return (
		<div className="activityGraph">
			<div className="activityGraph__title">Activité quotidienne</div>
			<BarChart
				data={data}
				barSize={10}
				width={800}
				height={320}
				style={textStyle}
			>
				<Legend
					align="right"
					verticalAlign="top"
					height={80}
					formatter={renderLegendStyle}
				/>
				<CartesianGrid strokeDasharray="2 3" vertical={false} />
				<XAxis
					dataKey="day"
					tickLine={false}
					tickSize={20}
					padding={{ left: -15, right: -20 }}
				/>
				<YAxis
					orientation="right"
					axisLine={false}
					tickLine={false}
					tickSize={20}
				/>
				<Tooltip
					contentStyle={{
						backgroundColor: '#E60000',
					}}
					itemStyle={{
						color: 'white',
					}}
					formatter={(value, name, unit) => [value, unit]}
					labelStyle={{ display: 'none' }}
				/>
				<Bar
					dataKey="kilogram"
					fill="#000000"
					unit="Kg"
					name="Poids (kg)"
				/>
				<Bar
					dataKey="calories"
					fill="#FF0000"
					unit="kCal"
					name="Calories brûlées (kCal)"
				/>
			</BarChart>
		</div>
	)
}

ActivityGraph.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			day: PropTypes.string.isRequired,
			kilogram: PropTypes.number.isRequired,
			calories: PropTypes.number.isRequired,
		})
	).isRequired,
}
