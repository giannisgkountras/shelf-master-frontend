import React, { useEffect, useState } from 'react';
import customerApi from '../api/customer';
import Loading from '../components/Loading';
import List from '../components/List';
import UpdateItem from '../components/UpdateItem';
const CustomerPage = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const columns = ['name', 'email', 'phone', 'street', 'zip'];

    useEffect(() => {
        customerApi.getAll().then((response) => {
            console.log(response);
            setCustomers(response);
        });
    }, []);
    return (
        <div className='w-full h-full flex justify-evenly items-center'>
            <List
                data={customers}
                columns={columns}
                rowsPerPage={10}
                title={'Details of all Customers'}
                selected={selectedCustomer}
                setSelected={setSelectedCustomer}
            />
            <UpdateItem
                category={columns}
                entity={selectedCustomer}
                title={'Edit Customer'}
            />
        </div>
    );
};

export default CustomerPage;
