import React, { useEffect, useState } from 'react';
import warehouseApi from '../api/warehouse';
import List from '../components/List';
import UpdateItem from '../components/UpdateItem';

const WarehousePage = () => {
    const [warehouses, setWarehouses] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);

    const [refresh, setRefresh] = useState(false);
    const columns = ['capacity', 'street', 'zip'];

    useEffect(() => {
        warehouseApi.getAll().then((response) => {
            setWarehouses(response);
            console.log(response);
        });
    }, [refresh]);

    return (
        <div className='w-full h-full flex justify-evenly items-center'>
            <List
                data={warehouses}
                columns={columns}
                rowsPerPage={10}
                title={'Details of all Warehouses'}
                selected={selectedWarehouse}
                setSelected={setSelectedWarehouse}
            />
            <UpdateItem
                category={columns}
                entity={selectedWarehouse}
                title={'Edit Warehouse'}
            />
        </div>
    );
};

export default WarehousePage;
