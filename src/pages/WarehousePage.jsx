import React, { useEffect, useState } from 'react';
import warehouseApi from '../api/warehouse';
import Loading from '../components/Loading';

const WarehousePage = () => {
    const [warehouses, setWarehouses] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const createWarehouse = () => {
        warehouseApi.create({
            capacity: 100,
            street: '1234 Main St',
            zip: '12345',
        });
        setRefresh(!refresh);
    };
    const updateWarehouse = () => {
        warehouseApi.update(5, {
            capacity: 200,
            street: '1234 Main St',
            zip: '12345',
        });
        setRefresh(!refresh);
    };
    const deleteWarehouse = () => {
        warehouseApi.delete(1);
        setRefresh(!refresh);
    };

    useEffect(() => {
        warehouseApi.getAll().then((response) => {
            setWarehouses(response);
        });
    }, [refresh]);

    return (
        <div className='w-full h-full'>
            {warehouses.length === 0 && <Loading />}
            {warehouses &&
                warehouses.map((warehouse, index) => (
                    <div key={index} className='bg-third/20 w-20 m-2'>
                        <h2>{warehouse.capacity}</h2>
                        <h2>{warehouse.street}</h2>
                        <h2>{warehouse.zip}</h2>
                    </div>
                ))}
            <button className='bg-primary' onClick={createWarehouse}>
                Create Warehouse
            </button>
            <button
                className='bg-secondary text-black'
                onClick={updateWarehouse}
            >
                Update Warehouse
            </button>
            <button className='bg-error' onClick={deleteWarehouse}>
                Delete Warehouse
            </button>
        </div>
    );
};

export default WarehousePage;
