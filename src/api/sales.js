import api from './index.js';

const salesApi = {
    // Fetch all sales
    getAll: (searchParams) => api.get('sales/', searchParams), 

    // Create a new sale
    create: (data) => api.post('sales/', data),

    // Delete a sale by ID
    delete: (id) => api.delete(`sales/${id}`),
};

export default salesApi;
