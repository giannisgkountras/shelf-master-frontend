import React, { useEffect, useState } from 'react';
import customerApi from '../api/customer';
import List from '../components/List';
import UpdateItem from '../components/UpdateItem';
import Alert from '../components/Alert';
const CustomerPage = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const columns = ['name', 'email', 'phone', 'street', 'zip'];
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        customerApi.getAll().then((response) => {
            console.log(response);
            setCustomers(response);
        });
    }, [refresh]);
    return (
        <div className='w-full h-full flex justify-evenly items-center relative overflow-hidden'>
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
                updateItem={customerApi.update}
                deleteItem={customerApi.delete}
                setRefresh={setRefresh}
                setAlertType={setAlertType}
                setAlertMessage={setAlertMessage}
            />
            {alertType && <Alert type={alertType} message={alertMessage} />}
        </div>
    );
};

export default CustomerPage;
