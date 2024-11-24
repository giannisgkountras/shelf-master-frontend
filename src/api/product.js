import api from './index';

const productApi = {
    // Fetch all products
    getAll: (searchParams) => api.get('products/', searchParams),

    // Fetch a single product by ID
    getById: (id) => api.get(`products/${id}`),

    // Create a new product
    create: (data) => api.post('products/', data),

    // Update an existing product by ID
    update: (id, data) => api.put(`products/${id}`, data),

    // Delete a product by ID
    delete: (id) => api.delete(`products/${id}`),
};

export default productApi;
