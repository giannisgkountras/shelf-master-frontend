import React from 'react';
import warehouseApi from '../api/warehouse';
import GenericViewUpdate from '../components/GenericViewUpdate';

const WarehousePage = () => {
    const columns = ['capacity', 'street', 'zip'];
    return (
        <GenericViewUpdate
            api={warehouseApi}
            columns={columns}
            title='Warehouse'
            entityName='Warehouse'
        />
    );
};

export default WarehousePage;
