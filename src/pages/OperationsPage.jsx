import React, { useState } from 'react';
import OrdersSuppliesStoreList from '../components/OrdersSuppliesStoreList';
import supplyApi from '../api/supplies';
import NewItem from '../components/NewItem';
const OperationsPage = () => {
    const [shouldReload, setShouldReload] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const suppliesColumns = [
        'id',
        'timestamp',
        'quantity',
        'supplierID',
        'productID',
    ];
    const salesColumns = [
        'id',
        'timestamp',
        'quantity',
        'customerID',
        'productID',
    ];
    const warehouseStockColumns = [
        'id',
        'quantity',
        'timestamp',
        'warehouseID',
        'productID',
    ];
    return (
        <div className='flex w-full h-full justify-evenly items-center relative overflow-hidden flex-wrap'>
            <OrdersSuppliesStoreList
                api={supplyApi}
                columns={suppliesColumns}
                title={'Supply Orders'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
            />
            <OrdersSuppliesStoreList
                api={supplyApi}
                columns={salesColumns}
                title={'Customer Sales'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
            />
            <OrdersSuppliesStoreList
                api={supplyApi}
                columns={warehouseStockColumns}
                title={'Warehouse Stock'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
            />
            <div className='flex justify-center items-center w-[47%] h-'>
                Create New Entry
            </div>
        </div>
    );
};

export default OperationsPage;
