import React, { useEffect, useState } from 'react';
import warehouseApi from '../api/warehouse';
import GenericViewUpdate from '../components/GenericViewUpdate';
import WarehouseCard from '../components/WarehouseCard';
import NewItem from '../components/NewItem';
import UpdateItem from '../components/UpdateItem';
import Alert from '../components/Alert';
import { IoAddCircle } from 'react-icons/io5';

const WarehousePage = () => {
    const [warehouses, setWarehouses] = useState([]);
    const columns = ['capacity', 'street', 'zip'];
    const [addNew, setAddNew] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [selectedEntity, setSelectedEntity] = useState(null);
    useEffect(() => {
        warehouseApi.getAll().then((data) => {
            setWarehouses(data);
        });
    }, [refresh]);

    return (
        <div className='w-full h-full flex flex-col justify-center items-center overflow-hidden relative'>
            <div className='font-semibold text-4xl w-10/12 my-4 py-4 flex justify-start items-center'>
                <p>All Warehouses</p>
                <IoAddCircle
                    className='text-primary rounded-full text-5xl  ml-2 hover:cursor-pointer hover:scale-110 transition-all duration-150'
                    onClick={() => {
                        setAddNew(true);
                        setSelectedEntity(null);
                    }}
                />
            </div>

            <div className='flex w-full justify-evenly items-center'>
                <div className='flex justify-evenly items-center flex-wrap w-7/12 h-[570px] shadow-2xl overflow-auto bg-third/10 rounded-xl scrollbar-thumb-third/20 scrollbar-track-third/10 scrollbar-thin'>
                    {warehouses.map((warehouse) => (
                        <WarehouseCard
                            warehouse={warehouse}
                            key={warehouse.id}
                            selectedEntity={selectedEntity}
                            setSelectedEntity={setSelectedEntity}
                        />
                    ))}
                </div>
                {!addNew && (
                    <UpdateItem
                        category={columns}
                        entity={selectedEntity}
                        setEntity={setSelectedEntity}
                        title={`Edit Warehouse`}
                        updateItem={warehouseApi.update}
                        deleteItem={warehouseApi.delete}
                        setRefresh={setRefresh}
                        setAlertType={setAlertType}
                        setAlertMessage={setAlertMessage}
                    />
                )}
                {addNew && (
                    <NewItem
                        setAddNew={setAddNew}
                        title={'Add Warehouse'}
                        category={columns}
                        createItem={warehouseApi.create}
                        setRefresh={setRefresh}
                        setAlertType={setAlertType}
                        setAlertMessage={setAlertMessage}
                    />
                )}
                {alertType && <Alert type={alertType} message={alertMessage} />}
            </div>
        </div>
    );
};

export default WarehousePage;
