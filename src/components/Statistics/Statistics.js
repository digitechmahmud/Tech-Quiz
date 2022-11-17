import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const quizzes = useLoaderData();
    console.log(quizzes.data);
    return (
        <div className='mt-11 md:mb-24 m-0'>
            <h2 className='text-5xl font-semibold mb-10'>BarChart based on Total Quiz</h2>
            <div>
                <ResponsiveContainer width={400} height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={quizzes.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey='name' fill="#000000" />
                        <Bar dataKey='total' fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
        </div>
    );
};

export default Statistics;