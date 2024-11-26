import React from 'react';
import productApi from '../api/product';
import GenericViewUpdate from '../components/GenericViewUpdate';

const ProductPage = () => {
    const columns = [
        'name',
        'manufacturer',
        'description',
        'price',
        'product_category',
    ];
    return (
        <div className='flex w-full h-full justify-center items-center relative overflow-hidden'>
            <GenericViewUpdate
                api={productApi}
                columns={columns}
                title='Product'
                entityName='Product'
            />
        </div>
    );
};

export default ProductPage;
