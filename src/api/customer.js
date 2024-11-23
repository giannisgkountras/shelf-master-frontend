import api from './index';

const customerApi = {
    // Fetch all customers
    getAll: (searchParams) => api.get('customers/', searchParams),

    // Fetch a single customer by ID
    getById: (id) => api.get(`customers/${id}`),

    // Create a new customer
    create: (data) => api.post('customers/', data),

    // Update an existing customer by ID
    update: (id, data) => api.put(`customers/${id}`, data),

    // Delete a customer by ID
    delete: (id) => api.delete(`customers/${id}`),
};

export default customerApi;
