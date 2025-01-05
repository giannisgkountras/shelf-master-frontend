import React, { useEffect, useState } from 'react';
import List from './List';

const OrdersSuppliesStoreList = ({
    api,
    columns,
    title,
    shouldReload,
    setSelectedCategory,
}) => {
    const [data, setdata] = useState([]);
    const [addNew, setAddNew] = useState(false);

    useEffect(() => {
        setSelectedCategory(columns);
    }, [addNew]);

    useEffect(() => {
        api.getAll().then((response) => {
            setdata(response);
        });
    }, [shouldReload]);
    return (
        <div className='flex justify-start items-center w-[47%] '>
            <List
                data={data}
                columns={columns}
                rowsPerPage={6}
                title={title}
                showAddNew={false}
            />
        </div>
    );
};

export default OrdersSuppliesStoreList;
