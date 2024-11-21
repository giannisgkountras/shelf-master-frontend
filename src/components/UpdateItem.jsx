import React, { useEffect, useState } from 'react';
import listColumnsRename from '../utils/listColumnsRename';
import clark from '../assets/clark.png';
const UpdateItem = ({ entity, category, title }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData(entity || {});
    }, [entity]);

    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    return (
        <div className='bg-[#fff] w-1/5 h-[570px] shadow-2xl rounded-xl flex justify-center items-center flex-col'>
            {entity !== null && (
                <form className='flex mt-4 justify-start flex-col items-center w-full h-full'>
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
                    <button className='bg-primary w-3/4 mt-2'>
                        Save Changes
                    </button>
                    <button className='bg-secondary w-3/4 mt-2 text-black'>
                        Cancel Changes
                    </button>
                    <button className='bg-error w-3/4 mt-2 '>
                        Delete Item
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
