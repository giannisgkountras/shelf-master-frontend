import api from './index';

const supplyApi = {
    // Fetch all supplies
    getAll: (searchParams) => api.get('supplies/', searchParams),

    // Create a new supply
    create: (data) => api.post('supplies/', data),

    // Delete a supply by ID
    delete: (id) => api.delete(`supplies/${id}`),
};

export default supplyApi;
