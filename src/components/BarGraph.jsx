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

const BarGraph = ({ title, data, warehouse = false }) => {
    const colorsForWarehouse = [
        '#305361',
        '#437570',
        '#518071',
        '#396a6d',
        '#335f68',
    ];
    return (
        <div
            className={`${warehouse ? 'w-5/12 h-[45%]' : 'w-6/12'} h-2/5 bg-[#fff] shadow-2xl flex justify-evenly items-center flex-col rounded-xl`}
        >
            <h1 className='text-black text-2xl h-10 font-semibold mt-2'>
                {title}
            </h1>
            <ResponsiveContainer width='100%' height='90%'>
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
                            <stop offset='95%' stopColor='#4c4d9b' />
                        </linearGradient>
                        <linearGradient
                            id='warehouseColor'
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='1'
                        >
                            <stop offset='0%' stopColor='#518071' />
                            <stop offset='100%' stopColor='#3d6055' />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar
                        dataKey='amount'
                        fill={
                            warehouse ? 'url(#warehouseColor)' : 'url(#color)'
                        }
                        radius={[5, 5, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarGraph;
