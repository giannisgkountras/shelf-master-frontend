const inputCategoryMap = {
    // for employee list
    fullName: 'text',
    role: 'text',
    warehouseID: 'text',

    // for customer list
    name: 'text',
    email: 'email',
    phone: 'tel',
    street: 'text',
    zip: 'text',
    city: 'text',

    // for warehouse list
    capacity: 'number',

    // for product list
    manufacturer: 'text',
    description: 'text',
    price: 'number',
    product_category: 'text',

    //for supplier supplies
    id: 'number',
    timestamp: 'datetime-local',
    quantity: 'number',
    supplierID: 'number',
    productID: 'number',
};

export default inputCategoryMap;
