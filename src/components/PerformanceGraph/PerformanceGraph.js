import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from 'recharts'

export default function PerformanceGraph({ data: { data, kind } }) {
	data = data.map((entry) => ({ value: entry.value, kind: kind[entry.kind] }))

	return data.length > 0 ? (
		<RadarChart outerRadius={90} width={300} height={300} data={data}>
			<PolarGrid />
			<PolarAngleAxis dataKey="kind" />
			<Radar
				dataKey="value"
				stroke="#FF0000"
				fill="#FF0000"
				fillOpacity={0.6}
			/>
		</RadarChart>
	) : null
}
