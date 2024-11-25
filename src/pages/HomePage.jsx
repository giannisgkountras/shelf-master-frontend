import React from 'react';
import revenueData from '../data/RevenueData';
import capacityData from '../data/CapacityData';

import SalesCard from '../components/SalesCard';
import BarGraph from '../components/BarGraph';
import PitaGraph from '../components/PitaGraph';
import MonthlySalesGraph from '../components/MonthlySalesGraph';

const HomePage = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex w-11/12 h-full justify-between  items-center flex-wrap'>
                <SalesCard />
                <BarGraph title={'Recent Revenue'} data={revenueData} />
                <BarGraph
                    title={'Warehouse Capacity'}
                    data={capacityData}
                    warehouse={true}
                />
                <PitaGraph />
                <MonthlySalesGraph />
            </div>
        </div>
    );
};

export default HomePage;
