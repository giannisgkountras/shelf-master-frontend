import api from './index';

const inventoryApi = {
    // Fetch all inventory records
    getAll: (searchParams) => api.get('inventory/', searchParams),

    // Create a new inventory record
    create: (data) => api.post('inventory/', data),

    // Delete an inventory record by ID
    delete: (id) => api.delete(`inventory/${id}`),
};

export default inventoryApi;
