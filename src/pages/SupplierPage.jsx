import React from 'react';
import supplierApi from '../api/supplier';
import GenericViewUpdate from '../components/GenericViewUpdate';
const SupplierPage = () => {
    const columns = ['name', 'email', 'phone', 'street', 'zip'];
    return (
        <div className='flex w-full h-full justify-center items-center relative overflow-hidden'>
            <GenericViewUpdate
                api={supplierApi}
                columns={columns}
                title='Supplier'
                entityName='Supplier'
            />
        </div>
    );
};

export default SupplierPage;
