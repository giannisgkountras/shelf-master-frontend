import React, { useState } from 'react';
import listColumnsRename from '../utils/listColumnsRename';
import inputCategoryMap from '../utils/mapColumnInputCategory';
import Loading from './Loading';

const NewItem = ({
    setAddNew,
    title,
    category,
    createItem,
    setRefresh,
    setAlertType,
    setAlertMessage,
}) => {
    const [formData, setFormData] = useState({});
    const [createLoading, setCreateLoading] = useState(false);
    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    const handleCreateItem = async (e) => {
        e.preventDefault();
        setCreateLoading(true);

        try {
            await createItem(formData);
            setTimeout(() => {
                setCreateLoading(false);
                setRefresh((prev) => !prev);
                setAlertType('success');
                setAlertMessage('Changes saved successfully!');
                setAddNew(false);
            }, 500);
            setTimeout(() => {
                setAlertType('');
                setAlertMessage('');
            }, 3000);
        } catch (error) {
            setCreateLoading(false);
            setAlertType('error');
            setAlertMessage('Error saving changes!');
            setTimeout(() => {
                setAlertType('');
                setAlertMessage('');
            }, 3000);
        }
    };
    return (
        <div className='bg-[#fff] w-[30%] min-h-[570px] h-fit shadow-2xl rounded-xl flex justify-center items-center flex-col '>
            <form
                className='flex mt-4 justify-start flex-col items-center w-full h-full'
                onSubmit={handleCreateItem}
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
                            type={inputCategoryMap[item]}
                            required
                            className='w-3/4 h-8 bg-third/20 pl-2 rounded-md focus:outline-none focus:bg-third/40'
                            value={formData[item] || ''}
                            onChange={(e) => handleChange(item, e.target.value)}
                        ></input>
                    </div>
                ))}

                <button
                    className='bg-primary w-3/4 mt-2 h-12 flex justify-center items-center'
                    type='submit'
                >
                    {createLoading ? <Loading /> : 'Save Changes'}
                </button>
                <button
                    className='bg-secondary w-3/4 mt-2 text-black h-12 mb-2'
                    onClick={() => setAddNew(false)}
                    type='button'
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default NewItem;
