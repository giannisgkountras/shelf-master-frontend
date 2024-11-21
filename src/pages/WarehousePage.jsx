import React, { useEffect, useState } from 'react';
import warehouseApi from '../api/warehouse';
import Loading from '../components/Loading';
import List from '../components/List';

const WarehousePage = () => {
    const [warehouses, setWarehouses] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const columns = ['capacity', 'street', 'zip'];

    useEffect(() => {
        warehouseApi.getAll().then((response) => {
            setWarehouses(response);
            console.log(response);
        });
    }, [refresh]);

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <List
                data={warehouses}
                columns={columns}
                rowsPerPage={10}
                title={'Details of all Warehouses'}
            />
            {/* <button className='bg-primary' onClick={createWarehouse}>
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
            </button> */}
        </div>
    );
};

export default WarehousePage;
