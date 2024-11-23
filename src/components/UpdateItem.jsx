import React, { useEffect, useState } from 'react';
import listColumnsRename from '../utils/listColumnsRename';
import clark from '../assets/clark.png';
import Loading from './Loading';
const UpdateItem = ({
    entity,
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
    useEffect(() => {
        setFormData(entity || {});
    }, [entity]);

    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleUpdateItem = (e) => {
        e.preventDefault();
        setSaveLoading(true);
        const { id, ...rest } = formData;
        updateItem(id, rest);
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
    };

    const handleDeleteItem = (e) => {
        e.preventDefault();
        setDeleteLoading(true);
        deleteItem(formData.id);
        setTimeout(() => {
            setDeleteLoading(false);
            setRefresh((prev) => !prev);
            setAlertType('success');
            setAlertMessage('Changes saved successfully!');
        }, 500);
        setTimeout(() => {
            setAlertType('');
            setAlertMessage('');
        }, 3000);
    };

    const handleCancelChanges = (e) => {
        e.preventDefault();
        setFormData(entity);
        setRefresh((prev) => !prev);
    };
    return (
        <div className='bg-[#fff] w-1/5 min-h-[570px] h-fit shadow-2xl rounded-xl flex justify-center items-center flex-col'>
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
                    <button
                        className='bg-error w-3/4 my-2 h-12 flex justify-center items-center'
                        type='button'
                    >
                        {deleteLoading ? <Loading /> : 'Delete Item'}
                    </button>
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
