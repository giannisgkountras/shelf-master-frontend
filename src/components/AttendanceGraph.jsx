import React from 'react';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

export default function AttendanceGraph() {
    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
    return (
        <div className='bg-[#fff] shadow-2xl w-11/12 h-2/6 mt-8 rounded-xl '>
            <div className='flex justify-between items-center p-4'>
                <h1 className='text-2xl font-semibold ml-4'>
                    Attendance Graph
                </h1>
                <div className='flex items-center'>
                    <button className='text-[#fff] bg-[#2e2e2e] px-4 py-2 rounded-lg mr-4'>
                        Week
                    </button>
                    <button className='text-[#fff] bg-[#2e2e2e] px-4 py-2 rounded-lg'>
                        Month
                    </button>
                </div>
            </div>
            <div className='flex justify-center w-1/3 h-full items-center'>
                <ResponsiveContainer width='90%' height='80%'>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid stroke='#f5f5f5' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type='monotone' dataKey='pv' stroke='#ff7300' />
                        <Line type='monotone' dataKey='uv' stroke='#387908' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
