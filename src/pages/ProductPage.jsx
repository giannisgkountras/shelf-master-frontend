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
        <GenericViewUpdate
            api={productApi}
            columns={columns}
            title='Product'
            entityName='Product'
        />
    );
};

export default ProductPage;
