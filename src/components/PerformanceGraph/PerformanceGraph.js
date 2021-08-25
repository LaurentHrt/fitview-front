import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis
} from "recharts";

export default function PerformanceGraph({ data: { data, kind } }) {

    data = data.map((entry) => ({ value: entry.value, kind: kind[entry.kind] }))

    return (
        <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar
                dataKey="value"
                stroke="#FF0000"
                fill="#FF0000"
                fillOpacity={0.6}
            />
        </RadarChart>
    )
}