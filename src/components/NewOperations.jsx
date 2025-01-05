import React, { useState } from 'react';
import supplyApi from '../api/supplies';
import salesApi from '../api/sales';
import inventoryApi from '../api/inventory';
import listColumnsRename from '../utils/listColumnsRename';

const NewOperations = ({ setShouldReload, setAlertType, setAlertMessage }) => {
    // TIMESTAMP GETS ADDED AUTOMATICALLY AS NOW
    const suppliesInputs = ['quantity', 'productID', 'supplierID'];
    const salesInputs = ['quantity', 'productID', 'customerID'];
    const warehouseStockInputs = ['quantity', 'productID', 'warehouseID'];
    const [selectedCategory, setSelectedCategory] = useState(salesInputs);
    const [activeCategory, setActiveCategory] = useState('sale');

    const [formValues, setFormValues] = useState({
        quantity: '',
        productID: '',
        supplierID: '',
        customerID: '',
        warehouseID: '',
    });

    const handleInputChange = (e, inputName) => {
        setFormValues({ ...formValues, [inputName]: e.target.value });
    };

    const handleSubmission = async (e) => {
        e.preventDefault();
        const formattedTimestamp = new Date()
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');

        try {
            if (activeCategory === 'sale') {
                await salesApi.create({
                    timestamp: formattedTimestamp,
                    quantity: formValues.quantity,
                    productID: formValues.productID,
                    customerID: formValues.customerID,
                });
            } else if (activeCategory === 'order') {
                await supplyApi.create({
                    timestamp: formattedTimestamp,
                    quantity: formValues.quantity,
                    productID: formValues.productID,
                    supplierID: formValues.supplierID,
                });
            } else if (activeCategory === 'stock') {
                await inventoryApi.create({
                    timestamp: formattedTimestamp,
                    quantity: formValues.quantity,
                    productID: formValues.productID,
                    warehouseID: formValues.warehouseID,
                });
            }

            setAlertType('success');
            setAlertMessage('Changes saved successfully!');
            setTimeout(() => {
                setAlertType('');
                setAlertMessage('');
            }, 3000);

            // Reset form values after successful submission
            setFormValues({
                quantity: '',
                productID: '',
                supplierID: '',
                customerID: '',
                warehouseID: '',
            });

            setShouldReload((prev) => !prev);
        } catch {
            setAlertType('error');
            setAlertMessage('Error saving changes!');
            setTimeout(() => {
                setAlertType('');
                setAlertMessage('');
            }, 3000);
        }
    };

    return (
        <div className='flex justify-start flex-col items-center w-full h-2/3 shadow-2xl rounded-xl bg-[#fff]'>
            <div className='flex w-full justify-evenly items-center h-14 bg-third/20 rounded-t-xl'>
                <div
                    className='flex justify-center items-center w-1/3 h-full rounded-tl-xl cursor-pointer hover:bg-third/40'
                    onClick={() => {
                        setSelectedCategory(salesInputs);
                        setActiveCategory('sale');
                    }}
                    style={{
                        backgroundColor:
                            activeCategory === 'sale' ? '#2F3061' : '',
                        color: activeCategory === 'sale' ? 'white' : '',
                    }}
                >
                    Customer Sale
                </div>
                <div
                    className='flex justify-center items-center w-1/3 h-full cursor-pointer hover:bg-third/40'
                    onClick={() => {
                        setSelectedCategory(suppliesInputs);
                        setActiveCategory('order');
                    }}
                    style={{
                        backgroundColor:
                            activeCategory === 'order' ? '#2F3061' : '',
                        color: activeCategory === 'order' ? 'white' : '',
                    }}
                >
                    Supply Order
                </div>
                <div
                    className='flex justify-center items-center w-1/3 h-full rounded-tr-xl cursor-pointer hover:bg-third/40'
                    onClick={() => {
                        setSelectedCategory(warehouseStockInputs);
                        setActiveCategory('stock');
                    }}
                    style={{
                        backgroundColor:
                            activeCategory === 'stock' ? '#2F3061' : '',
                        color: activeCategory === 'stock' ? 'white' : '',
                    }}
                >
                    Warehouse Stock
                </div>
            </div>
            <form
                className='flex flex-col justify-center items-center w-full h-full'
                onSubmit={handleSubmission}
            >
                <div className='flex h-full justify-evenly items-center w-full '>
                    {selectedCategory.map((input, index) => (
                        <div className='flex w-1/4 justify-center items-center flex-col'>
                            <label className='text-center mb-2'>
                                {listColumnsRename[input]}
                            </label>
                            <input
                                required
                                type='text'
                                value={formValues[input] || ''}
                                onChange={(e) => handleInputChange(e, input)}
                                className='w-full h-10 border px-2 border-primary rounded-lg'
                            />
                        </div>
                    ))}
                </div>
                <button
                    className='flex justify-center items-center w-1/4 h-10 bg-primary text-white rounded-lg mb-4 hover:bg-primary/80'
                    type='submit'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NewOperations;
