import React from 'react';
import { PiWarehouseBold } from 'react-icons/pi';
import { MdOutlineEdit } from 'react-icons/md';
const WarehouseCard = ({
    warehouse,
    selectedEntity,
    setSelectedEntity,
    availableCapacity,
}) => {
    const { id, capacity, street, zip } = warehouse;

    return (
        <div
            className={`w-1/6 min-h-60 min-w-64 ${selectedEntity?.id === warehouse.id ? 'bg-secondary/50' : 'bg-[#fff]'} rounded-2xl shadow-2xl relative m-4 hover:scale-105 transition-all duration-150 hover:cursor-pointer`}
            onClick={() => setSelectedEntity(warehouse)}
        >
            <div className='flex flex-col justify-between items-center h-60'>
                <p className='text-black text-sm font-semibold absolute top-2 left-2 bg-secondary w-fit px-2 text-center rounded-full'>
                    {id}
                </p>
                {selectedEntity?.id === warehouse.id && (
                    <MdOutlineEdit className='absolute top-2 right-2 text-3xl text-primary bg-secondary rounded-full p-1' />
                )}
                <PiWarehouseBold className='text-6xl text-[#ECAC85]' />
                <p className='text-black font-semibold mt-2 text-3xl text-center px-4'>
                    {street}
                </p>
                <p className='text-black text-lg font-semibold'>ZIP: {zip}</p>
                <p className='text-black text-lg font-semibold'>
                    Capacity: {(capacity - availableCapacity)}/{capacity}
                </p>
                <div className='w-4/5 bg-gray-200 rounded-full my-4 relative'>
                    <div
                        className='bg-[#518071] text-white text-center h-5 p-1  leading-none rounded-full'
                        style={{
                            width: ((capacity - availableCapacity) / capacity) * 100 + '%',
                        }}
                    ></div>
                    <p
                        className='absolute top-0 text-sm right-[43%]'
                        style={{
                            color:
                                (capacity - availableCapacity) / capacity > 0.5
                                    ? '#fff'
                                    : '#000',
                        }}
                    >
                        {Math.round(((capacity - availableCapacity) / capacity) * 100) + '%'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WarehouseCard;
