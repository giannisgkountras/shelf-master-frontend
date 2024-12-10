import React, { useEffect } from 'react';
import supplierApi from '../api/supplier';
import GenericViewUpdate from '../components/GenericViewUpdate';
const SupplierPage = () => {
    const columns = ['name', 'email', 'phone', 'street', 'zip', 'city'];
    return (
        <div className='flex w-full h-full justify-evenly items-center relative overflow-hidden flex-col'>
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
