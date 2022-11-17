import React from 'react';  
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({quiz}) => {
    console.log(quiz.total);
    const { total, name } = quiz;
    return (
        <div>
            <LineChart width={500} height={300} data={quiz}>
                <Line type='monotone' dataKey={total} stroke='#000000' />
                <XAxis dataKey={name}></XAxis>
            </LineChart>
  
        </div>
    );
};

export default Charts;