import React, { useState } from 'react';
import OrdersSuppliesStoreList from '../components/OrdersSuppliesStoreList';
import supplyApi from '../api/supplies';
import inventoryApi from '../api/inventory';
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
            {/* Element for Inventory, Supplies and Sales */}
            <OrdersSuppliesStoreList
                api={supplyApi}
                columns={suppliesColumns}
                title={'Supply Orders'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
            />
            <OrdersSuppliesStoreList
                api={inventoryApi}
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
            <div className='flex justify-center items-center w-[47%] h-'></div>
        </div>
    );
};

export default OperationsPage;
