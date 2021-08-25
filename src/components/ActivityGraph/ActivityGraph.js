import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'

export default function ActivityGraph({ data }) {
	return (
		<ResponsiveContainer width={'100%'} height={320}>
			<BarChart
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="day" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="calories" fill="#FF0000" />
				<Bar dataKey="kilogram" fill="#000000" />
			</BarChart>
		</ResponsiveContainer>
	)
}
