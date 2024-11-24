import React from 'react';
import supplierApi from '../api/supplier';
import GenericViewUpdate from '../components/GenericViewUpdate';
const SupplierPage = () => {
    const columns = ['name', 'email', 'phone', 'street', 'zip'];
    return (
        <GenericViewUpdate
            api={supplierApi}
            columns={columns}
            title='Supplier'
            entityName='Supplier'
        />
    );
};

export default SupplierPage;
