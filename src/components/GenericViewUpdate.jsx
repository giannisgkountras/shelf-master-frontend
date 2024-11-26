import React, { useEffect, useState } from 'react';
import List from '../components/List';
import UpdateItem from '../components/UpdateItem';
import Alert from '../components/Alert';
import NewItem from '../components/NewItem';

const GenericViewUpdate = ({ api, columns, title, entityName }) => {
    const [entities, setEntities] = useState([]);
    const [selectedEntity, setSelectedEntity] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [addNew, setAddNew] = useState(false);

    useEffect(() => {
        api.getAll().then((response) => {
            setEntities(response);
        });
    }, [refresh]);

    return (
        <div className='w-11/12 h-fit flex justify-between items-center'>
            <List
                data={entities}
                columns={columns}
                rowsPerPage={10}
                title={`Details of all ${entityName}s`}
                selected={selectedEntity}
                setSelected={setSelectedEntity}
                add={entityName}
                setAddNew={setAddNew}
            />
            {!addNew && (
                <UpdateItem
                    category={columns}
                    entity={selectedEntity}
                    setEntity={setSelectedEntity}
                    title={`Edit ${entityName}`}
                    updateItem={api.update}
                    deleteItem={api.delete}
                    setRefresh={setRefresh}
                    setAlertType={setAlertType}
                    setAlertMessage={setAlertMessage}
                />
            )}
            {alertType && <Alert type={alertType} message={alertMessage} />}
            {addNew && (
                <NewItem
                    setAddNew={setAddNew}
                    title={`Create ${entityName}`}
                    category={columns}
                    createItem={api.create}
                    setRefresh={setRefresh}
                    setAlertType={setAlertType}
                    setAlertMessage={setAlertMessage}
                />
            )}
        </div>
    );
};

export default GenericViewUpdate;
