import api from './index';

const customerApi = {
    // Fetch all customers
    getAll: async (searchParams) => await api.get('customers/', searchParams),

    // Fetch a single customer by ID
    getById: async (id) => await api.get(`customers/${id}`),

    // Create a new customer
    create: async (data) => await api.post('customers/', data),

    // Update an existing customer by ID
    update: async (id, data) => await api.put(`customers/${id}`, data),

    // Delete a customer by ID
    delete: async (id) => await api.delete(`customers/${id}`),
};

export default customerApi;
