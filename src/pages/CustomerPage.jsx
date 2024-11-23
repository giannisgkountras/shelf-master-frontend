import React from 'react';
import customerApi from '../api/customer';
import GenericViewUpdate from '../components/GenericViewUpdate';

const CustomerPage = () => {
    const columns = ['name', 'email', 'phone', 'street', 'zip'];
    return (
        <GenericViewUpdate
            api={customerApi}
            columns={columns}
            title='Customer'
            entityName='Customer'
        />
    );
};

export default CustomerPage;
