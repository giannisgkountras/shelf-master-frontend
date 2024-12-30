import api from './index';

const warehouseApi = {
    // Fetch all warehouses
    getAll: (searchParams) => api.get('warehouses/', searchParams),

    // Fetch a single warehouse by ID
    getById: (id) => api.get(`warehouses/${id}`),

    // Create a new warehouse
    create: (data) => api.post('warehouses/', data),

    // Update an existing warehouse by ID
    update: (id, data) => api.put(`warehouses/${id}`, data),

    // Delete a warehouse by ID
    delete: (id) => api.delete(`warehouses/${id}`),

    getAvailableProductsInWarehouse: (id) => api.get(`current-inventory/${id}`),

    // Fetch available capacities for all warehouses
    getAvailableCapacities: () => api.get('warehouses/current-capacity'),
};

export default warehouseApi;
