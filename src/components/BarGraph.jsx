import React from 'react';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import data from '../data/BarData';

const BarGraph = () => {
    return (
        <div className='w-5/12 h-1/3 bg-[#fff] shadow-2xl flex justify-evenly items-center flex-col rounded-xl'>
            <h1 className='text-black text-2xl font-semibold mt-2'>
                Weekly Sales
            </h1>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <defs>
                        <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset='5%' stopColor='#2F3061' />
                            <stop offset='95%' stopColor='#9480FA' />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey='amount' fill={'url(#color)'} radius={5} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarGraph;
