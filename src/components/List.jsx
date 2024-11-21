import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoPersonAdd } from 'react-icons/io5';
import Loading from './Loading';
import listColumnsRename from '../utils/listColumnsRename';

const List = ({ data, columns, rowsPerPage, title, selected, setSelected }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Calculate the indices for the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const filteredData = data.filter((item) =>
        columns.some((col) =>
            String(item[col]).toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const currentData = filteredData.slice(startIndex, endIndex);

    // Handlers for pagination
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='flex flex-col justify-center  items-center w-3/5 shadow-2xl rounded-xl bg-[#fff]'>
            <div className='flex justify-between items-center w-11/12 h-16'>
                <h1 className='font-semibold text-2xl w-full text-center'>
                    {title}
                </h1>
                <div className='flex justify-center items-center bg-third/20 w-fit p-1 rounded-full'>
                    <IoIosSearch className='text-gray-500 text-xl mr-2 ml-1' />
                    <input
                        type='text'
                        placeholder='Search'
                        className=' focus:outline-none bg-transparent placeholder:text-gray-500'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className='flex justify-evenly items-center w-full border-b border-primary/20 h-10'>
                {columns.map((col, index) => (
                    <p className='text-center w-full font-semibold' key={index}>
                        {listColumnsRename[col]}
                    </p>
                ))}
            </div>
            {currentData.length === 0 && data.length !== 0 && (
                <div className='flex justify-center items-center w-full h-10 bg-white'>
                    <p>No data found</p>
                </div>
            )}
            {data.length === 0 && <Loading />}
            <div className='flex flex-col w-full h-full min-h-[400px] justify-start items-center'>
                {currentData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex justify-evenly items-center w-full h-10 hover:cursor-pointer hover:bg-secondary/40 ${
                            selected?.id === item.id
                                ? 'bg-secondary/40'
                                : index % 2 === 0
                                  ? 'bg-white'
                                  : 'bg-third/20'
                        }`}
                        onClick={() => setSelected(item)}
                    >
                        {columns.map((col, colIndex) => (
                            <p className='w-full text-center' key={colIndex}>
                                {item[col]}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <div className='flex w-full justify-center items-center mt-2 mb-4 relative'>
                <p className='text-center text-sm absolute right-4 bottom-0'>
                    Showing {currentData.length} of {data.length} entries
                </p>
                <button
                    className='text-black bg-secondary p-2 w-20 mr-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <div className='flex justify-center items-center'>
                    Page {currentPage} of {totalPages}
                </div>
                <button
                    className='text-black bg-secondary p-2 w-20 ml-4 cursor-pointer  disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default List;
