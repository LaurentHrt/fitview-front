import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import './PerformanceGraph.css'

export default function PerformanceGraph({ data: { data, kind } }) {
	data = data.map((entry) => ({ value: entry.value, kind: kind[entry.kind] }))

	return data.length > 0 ? (
		<div className="performanceGraph">
			<RadarChart outerRadius={90} data={data} width={260} height={260}>
				<PolarGrid />
				<PolarAngleAxis
					dataKey="kind"
					tick={{ fill: '#FFFFFF', fontSize: 12 }}
				/>

				<Radar
					dataKey="value"
					stroke="#FF0000"
					fill="#FF0000"
					fillOpacity={0.6}
				/>
			</RadarChart>
		</div>
	) : null
}
