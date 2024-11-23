import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
const Alert = ({ type, message }) => {
    const alertType = type === 'error' ? 'bg-error' : 'bg-success';
    return (
        <div
            className={`absolute bottom-8 right-8 w-1/3 p-4 rounded-xl text-black text-xl font-semibold ${alertType} slide-in`}
        >
            {type === 'success' ? (
                <div className='flex justify-start items-center w-full'>
                    <FaCheckCircle className='mr-4' /> <p>{message}</p>
                </div>
            ) : (
                <div className='flex justify-start items-center w-full'>
                    <FaTimesCircle className='mr-4' /> <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default Alert;
