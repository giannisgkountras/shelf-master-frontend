import api from './index';

const inventoryApi = {
    // Fetch all supplies
    getAll: (searchParams) => api.get('inventory/', searchParams),

    // Create a new supply
    create: (data) => api.post('inventory/', data),

    // Delete a supply by ID
    delete: (id) => api.delete(`inventory/${id}`),
};

export default inventoryApi;
