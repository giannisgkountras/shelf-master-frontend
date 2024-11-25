import React from 'react';
import {
    PieChart,
    Pie,
    Legend,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';
import productCategoryData from '../data/ProductCategoryData';
const PitaGraph = () => {
    const COLORS = [
        '#f3806a',
        '#d76c85',
        '#a86493',
        '#745f8e',
        '#475678',
        '#2f4858',
    ];
    return (
        <div className='w-3/12 h-[45%] bg-[#fff] shadow-2xl flex justify-center items-center flex-col rounded-xl'>
            <h1 className='text-black text-2xl h-10 font-semibold mt-2'>
                Product Categories
            </h1>
            <ResponsiveContainer width='100%' height='100%'>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey='value'
                        data={productCategoryData}
                        cx='50%'
                        cy='50%'
                        outerRadius={120}
                        label
                        nameKey='name'
                        legendType='circle'
                    >
                        {productCategoryData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PitaGraph;
