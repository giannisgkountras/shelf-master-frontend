import React, { useState } from 'react';
import OrdersSuppliesStoreList from '../components/OrdersSuppliesStoreList';
import supplyApi from '../api/supplies';
import inventoryApi from '../api/inventory';
import salesApi from '../api/sales';
import NewItem from '../components/NewItem';
const OperationsPage = () => {
    const [shouldReload, setShouldReload] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const suppliesColumns = [
        // 'id',
        'timestamp',
        'quantity',
        // 'supplierID',
        // 'productID',
        'productName',
        'supplierName',
    ];
    const salesColumns = [
        // 'id',
        'timestamp',
        'quantity',
        // 'customerID',
        'customerName',
        'productName',
        // 'productID',
    ];
    const warehouseStockColumns = [
        // 'id',
        'timestamp',
        'quantity',
        'warehouseID',
        'productName',
        // 'productID',
    ];

    const [selectedOperation, setSelectedOperation] = useState('');

    console.log(selectedOperation);
    return (
        <div className='flex w-full h-full justify-evenly items-center relative overflow-hidden flex-wrap'>
            {/* Element for Inventory, Supplies and Sales */}
            <OrdersSuppliesStoreList
                api={supplyApi}
                columns={suppliesColumns}
                title={'Supply Orders'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
                setSelectedOperation={setSelectedOperation}
            />
            <OrdersSuppliesStoreList
                api={salesApi}
                columns={salesColumns}
                title={'Customer Sales'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
                setSelectedOperation={setSelectedOperation}
            />
            <OrdersSuppliesStoreList
                api={inventoryApi}
                columns={warehouseStockColumns}
                title={'Warehouse Stock'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
                setSelectedOperation={setSelectedOperation}
            />
            <div className='flex flex-col justify-center items-center w-[47%] h-[45%]'>
                <h1 className='text-xl font-semibold'>New Supply Order</h1>
                <h1 className='text-xl font-semibold'>New Customer Sale</h1>
                <h1 className='text-xl font-semibold'>New Warehouse Stock</h1>
            </div>
        </div>
    );
};

export default OperationsPage;
