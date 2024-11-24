import api from './index';

const supplierApi = {
    // Fetch all suppliers
    getAll: (searchParams) => api.get('suppliers/', searchParams),

    // Fetch a single supplier by ID
    getById: (id) => api.get(`suppliers/${id}`),

    // Create a new supplier
    create: (data) => api.post('suppliers/', data),

    // Update an existing supplier by ID
    update: (id, data) => api.put(`suppliers/${id}`, data),

    // Delete a supplier by ID
    delete: (id) => api.delete(`suppliers/${id}`),
};

export default supplierApi;
