import React from 'react';
import { BiExport } from 'react-icons/bi';
import { MdAutoGraph } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa6';
const SalesCard = () => {
    return (
        <div className='w-5/12 h-1/3 bg-[#fff] shadow-2xl flex justify-evenly items-center flex-col rounded-xl'>
            <div className='flex justify-between items-center w-11/12'>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-2xl font-semibold'>Today's Trend</p>
                    <p className='text-gray-600 font-bold'>Latest Summary</p>
                </div>
                <p className='bg-primary px-5 py-3 text-white rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-primary/70'>
                    <BiExport className='mr-2 text-xl' />
                    Export
                </p>
            </div>
            <div className='w-11/12 h-1/2 flex justify-evenly items-center'>
                <div className='flex flex-col w-48 h-full justify-evenly items-center bg-[#f3806a] p-4 rounded-2xl text-white'>
                    <p className='text-4xl font-bold flex justify-between items-center'>
                        €5.3k <MdAutoGraph className='text-5xl ml-4' />
                    </p>
                    <div className='flex flex-col justify-end items-start'>
                        <p className='text-white text-xl font-semibold text-start'>
                            Total Sales
                        </p>
                        <p className='text-white text-sm text-start'>
                            +3% from yesterday
                        </p>
                    </div>
                </div>
                <div className='flex flex-col w-48 h-full justify-evenly items-center bg-[#c25777] p-4 rounded-2xl text-white'>
                    <p className='text-4xl font-bold w-11/12 flex justify-between items-center'>
                        <p>241</p> <FaClipboardList className='text-5xl' />
                    </p>
                    <div className='flex flex-col justify-end items-start'>
                        <p className='text-white text-xl font-semibold text-start'>
                            Total Orders
                        </p>
                        <p className='text-white text-sm text-start'>
                            +8% from yesterday
                        </p>
                    </div>
                </div>
                <div className='flex flex-col w-48 h-full justify-between items-center rounded-2xl text-white'>
                    <div className='w-full flex justify-evenly items-center rounded-2xl h-1/2 mb-2 bg-[#518071]'>
                        <p className='text-4xl font-bold'>84</p>
                        <div className='flex flex-col justify-center items-end'>
                            <p className='text-white '>Products Sold</p>
                            <p className='text-white text-xs'>
                                -5% from yesterday
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-evenly items-center rounded-2xl h-1/2 mt-2 bg-[#7d4177]'>
                        <p className='text-4xl font-bold'>95</p>
                        <div className='flex flex-col justify-center items-end'>
                            <p className='text-white '>New Products</p>
                            <p className='text-white text-xs'>
                                +4 New Suppliers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesCard;
