import React, { useEffect, useState } from 'react';
import customerApi from '../api/customer';
import Loading from '../components/Loading';
import List from '../components/List';
const CustomerPage = () => {
    const [customers, setCustomers] = useState([]);
    const columns = ['name', 'email', 'phone', 'street', 'zip'];

    useEffect(() => {
        customerApi.getAll().then((response) => {
            console.log(response);
            setCustomers(response);
        });
    }, []);
    return (
        <div className='w-full h-full flex justify-center items-center'>
            {customers && (
                <List
                    data={customers}
                    columns={columns}
                    rowsPerPage={10}
                    title={'Details of all Customers'}
                />
            )}
        </div>
    );
};

export default CustomerPage;
