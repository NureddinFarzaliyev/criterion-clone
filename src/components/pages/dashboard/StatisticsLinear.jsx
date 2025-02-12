import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const StatisticsLinear = ({data}) => {
  return (
    <div className='chart-container'>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid opacity={0.1} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke={`var(--color-gold)`} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
  )
}

export default StatisticsLinear
