import React, { useEffect, useState } from 'react';
import listColumnsRename from '../utils/listColumnsRename';
import clark from '../assets/clark.png';
import Loading from './Loading';
const UpdateItem = ({
    entity,
    setEntity,
    category,
    title,
    updateItem,
    deleteItem,
    setRefresh,
    setAlertType,
    setAlertMessage,
}) => {
    const [formData, setFormData] = useState({});
    const [saveLoading, setSaveLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    useEffect(() => {
        setFormData(entity || {});
    }, [entity]);

    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleUpdateItem = async (e) => {
        e.preventDefault();
        setSaveLoading(true);
        const { id, ...rest } = formData;
        try {
            await updateItem(id, rest);
            setTimeout(() => {
                setSaveLoading(false);
                setRefresh((prev) => !prev);
                setAlertType('success');
                setAlertMessage('Changes saved successfully!');
            }, 500);
            setTimeout(() => {
                setAlertType('');
                setAlertMessage('');
            }, 3000);
        } catch (error) {
            setSaveLoading(false);
            setAlertType('error');
            setAlertMessage('Error saving changes!');
            setTimeout(() => {
                setAlertType('');
                setAlertMessage('');
            }, 3000);
        }
    };

    const handleDeleteItem = async (e) => {
        e.preventDefault();
        setConfirmDelete((prev) => !prev);
        setDeleteLoading(true);
        try {
            await deleteItem(formData.id);
            setTimeout(() => {
                setDeleteLoading(false);
                setRefresh((prev) => !prev);
                setAlertType('success');
                setAlertMessage('Changes saved successfully!');
                setEntity(null);
            }, 500);
            setTimeout(() => {
                setAlertType('');
                setAlertMessage('');
            }, 3000);
        } catch (error) {
            setDeleteLoading(false);
            setAlertType('error');
            setAlertMessage('Error deleting item!');
            setTimeout(() => {
                setAlertType('');
                setAlertMessage('');
            }, 3000);
        }
    };

    const handleCancelChanges = (e) => {
        e.preventDefault();
        setFormData(entity);
        setRefresh((prev) => !prev);
    };
    return (
        <div className='bg-[#fff] w-1/5 min-h-[570px] h-fit shadow-2xl rounded-xl flex justify-center items-center flex-col '>
            {entity !== null && (
                <form
                    className='flex mt-4 justify-start flex-col items-center w-full h-full'
                    onSubmit={handleUpdateItem}
                >
                    <h1 className='text-2xl border-b-2 border-black w-3/4 text-center'>
                        {title}
                    </h1>
                    {category.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-col justify-center items-center w-full h-16 my-1'
                        >
                            <label className='font-semibold text-lg text-left w-3/4'>
                                {listColumnsRename[item]}
                            </label>
                            <input
                                type='text'
                                className='w-3/4 h-8 bg-third/20 pl-2 rounded-md focus:outline-none focus:bg-third/40'
                                value={formData[item] || ''}
                                onChange={(e) =>
                                    handleChange(item, e.target.value)
                                }
                            ></input>
                        </div>
                    ))}
                    <button
                        className='bg-primary w-3/4 mt-2 h-12 flex justify-center items-center'
                        type='submit'
                        disabled={saveLoading}
                    >
                        {saveLoading ? <Loading /> : 'Save Changes'}
                    </button>
                    <button
                        className='bg-secondary w-3/4 mt-2 text-black h-12'
                        onClick={handleCancelChanges}
                        type='button'
                    >
                        Cancel Changes
                    </button>
                    {!confirmDelete && (
                        <button
                            className='bg-error w-3/4 my-2 h-12 flex justify-center items-center'
                            type='button'
                            onClick={() => setConfirmDelete((prev) => !prev)}
                            disabled={deleteLoading}
                        >
                            {deleteLoading ? <Loading /> : 'Delete Item'}
                        </button>
                    )}
                    {confirmDelete && (
                        <div className='w-3/4 h-20 flex flex-col justify-center items-center my-2 bg-error/20 rounded-lg p-2'>
                            <p className='my-1'>Are you sure?</p>
                            <div className='flex w-full justify-evenly items-center'>
                                <button
                                    className='bg-black w-1/2 h-8 ml-2 flex justify-center items-center'
                                    onClick={() =>
                                        setConfirmDelete((prev) => !prev)
                                    }
                                >
                                    Cancel
                                </button>
                                <button
                                    className='bg-error w-1/2 h-8 ml-2 flex justify-center items-center'
                                    onClick={handleDeleteItem}
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            )}
            {entity === null && (
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <img src={clark} alt='clark' className='w-52 ' />
                    <h1 className='text-center text-xl mt-4'>
                        Select an item to view details
                    </h1>
                </div>
            )}
        </div>
    );
};

export default UpdateItem;
