import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

class ExChart extends React.Component {
  render() {
    const min = 1111;
    const max = 3333;

    const data = [
      {
        name: "Page A",
        uv: Math.floor(Math.random() * (max - min + 1) + min),
        xx: Math.floor(Math.random() * (max - min + 1) + min),
        pv: Math.floor(Math.random() * (max - min + 1) + min)
      },
      {
        name: "Page B",
        uv: Math.floor(Math.random() * (max - min + 1) + min),
        xx: Math.floor(Math.random() * (max - min + 1) + min),
        pv: Math.floor(Math.random() * (max - min + 1) + min)
      },
      {
        name: "Page C",
        uv: Math.floor(Math.random() * (max - min + 1) + min),
        xx: Math.floor(Math.random() * (max - min + 1) + min),
        pv: Math.floor(Math.random() * (max - min + 1) + min)
      },
      {
        name: "Page D",
        uv: Math.floor(Math.random() * (max - min + 1) + min),
        xx: Math.floor(Math.random() * (max - min + 1) + min),
        pv: Math.floor(Math.random() * (max - min + 1) + min)
      },
      {
        name: "Page E",
        uv: Math.floor(Math.random() * (max - min + 1) + min),
        xx: Math.floor(Math.random() * (max - min + 1) + min),
        pv: Math.floor(Math.random() * (max - min + 1) + min)
      },
      {
        name: "Page F",
        uv: Math.floor(Math.random() * (max - min + 1) + min),
        xx: Math.floor(Math.random() * (max - min + 1) + min),
        pv: Math.floor(Math.random() * (max - min + 1) + min)
      },
      {
        name: "Page G",
        uv: Math.floor(Math.random() * (max - min + 1) + min),
        xx: Math.floor(Math.random() * (max - min + 1) + min),
        pv: Math.floor(Math.random() * (max - min + 1) + min)
      }
    ];
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <Bar dataKey="xx" fill="#de3e32" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default ExChart;
