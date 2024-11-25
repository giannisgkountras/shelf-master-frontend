import React from 'react';
import jsPDF from 'jspdf';
import { BiExport } from 'react-icons/bi';
import { MdAutoGraph } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa6';
const SalesCard = () => {
    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Today's Trend - Latest Summary", 10, 10);

        doc.setFontSize(12);
        doc.text(`Total Sales: ${todaySales} (+3% from yesterday)`, 10, 20);
        doc.text(`Total Orders: ${totalOrders} (+8% from yesterday)`, 10, 30);
        doc.text(`Products Sold: ${productsSold} (-5% from yesterday)`, 10, 40);
        doc.text(`New Products: ${newProducts} (+4 New Suppliers)`, 10, 50);

        doc.save('sales-summary.pdf');
    };

    const todaySales = '€5.3k';
    const totalOrders = 241;
    const productsSold = 84;
    const newProducts = 95;

    return (
        <div className='w-[48%] h-2/5 bg-[#fff] shadow-2xl flex justify-evenly items-center flex-col rounded-xl'>
            <div className='flex justify-between items-center w-11/12'>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-2xl font-semibold'>Today's Trend</p>
                    <p className='text-gray-600 font-bold'>Latest Summary</p>
                </div>
                <p
                    className='bg-primary px-5 py-3 text-white rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-primary/70'
                    onClick={exportToPDF}
                >
                    <BiExport className='mr-2 text-xl' />
                    Export
                </p>
            </div>
            <div className='w-11/12 h-1/2 flex justify-evenly items-center'>
                <div className='flex flex-col w-48 h-full justify-evenly items-center bg-[#f3806a] p-4 rounded-2xl text-white shadow-xl'>
                    <p className='text-4xl font-bold flex justify-between items-center'>
                        {todaySales} <MdAutoGraph className='text-5xl ml-4' />
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
                <div className='flex flex-col w-48 h-full justify-evenly items-center bg-[#c25777] p-4 rounded-2xl text-white shadow-xl'>
                    <p className='text-4xl font-bold w-11/12 flex justify-between items-center'>
                        <p>{totalOrders}</p>{' '}
                        <FaClipboardList className='text-5xl' />
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
                    <div className='w-full flex justify-evenly items-center rounded-2xl h-1/2 mb-2 bg-[#518071] shadow-xl'>
                        <p className='text-4xl font-bold'>{productsSold}</p>
                        <div className='flex flex-col justify-center items-end'>
                            <p className='text-white '>Products Sold</p>
                            <p className='text-white text-xs'>
                                -5% from yesterday
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-evenly items-center rounded-2xl h-1/2 mt-2 bg-[#7d4177] shadow-xl'>
                        <p className='text-4xl font-bold'>{newProducts}</p>
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
