import React from 'react';
import customerApi from '../api/customer';
import GenericViewUpdate from '../components/GenericViewUpdate';

const CustomerPage = () => {
    const columns = ['name', 'email', 'phone', 'street', 'zip'];
    return (
        <div className='flex w-full h-full justify-center items-center relative overflow-hidden'>
            <GenericViewUpdate
                api={customerApi}
                columns={columns}
                title='Customer'
                entityName='Customer'
            />
        </div>
    );
};

export default CustomerPage;
