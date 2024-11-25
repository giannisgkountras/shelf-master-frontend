import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import monthlySalesData from '../data/MonthlySalesData';

const MonthlySalesGraph = () => {
    return (
        <div className='w-[30%] h-[45%] bg-[#fff] shadow-2xl flex justify-center items-center flex-col rounded-xl'>
            <h1 className='text-black text-2xl h-10 font-semibold mt-2'>
                Yearly Revenue & Sales
            </h1>
            <ResponsiveContainer width='100%' height='45%'>
                <AreaChart
                    width={500}
                    height={200}
                    data={monthlySalesData}
                    syncId='anyId'
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type='monotone'
                        dataKey='revenue'
                        stroke='#8884d8'
                        fill='#8884d8'
                    />
                </AreaChart>
            </ResponsiveContainer>

            <ResponsiveContainer width='100%' height='45%'>
                <AreaChart
                    width={500}
                    height={200}
                    data={monthlySalesData}
                    syncId='anyId'
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type='monotone'
                        dataKey='sales'
                        stroke='#82ca9d'
                        fill='#82ca9d'
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MonthlySalesGraph;
