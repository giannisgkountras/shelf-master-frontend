import React, { useEffect, useState } from 'react';
import customerApi from '../api/customer';
import Loading from '../components/Loading';

const CustomerPage = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        customerApi.getAll().then((response) => {
            console.log(response);
            setCustomers(response);
        });
    }, []);
    return (
        <div className='w-full h-full'>
            {customers.length === 0 && <Loading />}
            {customers &&
                customers.map((customer, index) => (
                    <div key={index} className='bg-third/20 w-fit m-2'>
                        <h2>{customer.name}</h2>
                        <h2>{customer.email}</h2>
                        <h2>{customer.phone}</h2>
                        <h2>{customer.street}</h2>
                        <h2>{customer.zip}</h2>
                    </div>
                ))}
        </div>
    );
};

export default CustomerPage;
