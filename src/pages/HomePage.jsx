import React from 'react';
import SalesCard from '../components/SalesCard';
import BarGraph from '../components/BarGraph';

const HomePage = () => {
    return (
        <div className='w-full h-full flex justify-evenly items-center'>
            <SalesCard />
            <BarGraph />
        </div>
    );
};

export default HomePage;
