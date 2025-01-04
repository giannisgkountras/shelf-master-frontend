import React, { useState, useEffect } from 'react';
import OrdersSuppliesStoreList from '../components/OrdersSuppliesStoreList';
import supplyApi from '../api/supplies';
import inventoryApi from '../api/inventory';
import salesApi from '../api/sales';
import NewOperations from '../components/NewOperations';
import Alert from '../components/Alert';

const OperationsPage = () => {
    const [shouldReload, setShouldReload] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

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
                api={salesApi}
                columns={salesColumns}
                title={'Customer Sales'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
            />
            <OrdersSuppliesStoreList
                api={inventoryApi}
                columns={warehouseStockColumns}
                title={'Warehouse Stock'}
                shouldReload={shouldReload}
                setSelectedCategory={setSelectedCategory}
            />
            <div className='flex flex-col justify-center items-center w-[47%] h-[45%]'>
                <NewOperations
                    setShouldReload={setShouldReload}
                    setAlertType={setAlertType}
                    setAlertMessage={setAlertMessage}
                />
            </div>
            {alertType && <Alert type={alertType} message={alertMessage} />}
        </div>
    );
};

export default OperationsPage;
