import React from 'react';
import revenueData from '../data/RevenueData';
import capacityData from '../data/CapacityData';

import SalesCard from '../components/SalesCard';
import BarGraph from '../components/BarGraph';

const HomePage = () => {
    return (
        <div className='w-full h-full flex justify-evenly items-center flex-wrap'>
            <SalesCard />
            <BarGraph title={'Recent Revenue'} data={revenueData} />
            <BarGraph
                title={'Warehouse Capacity'}
                data={capacityData}
                warehouse={true}
            />
        </div>
    );
};

export default HomePage;
