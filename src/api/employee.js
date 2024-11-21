import api from './index';

const employeeApi = {
    // Fetch all employees
    getAll: (searchParams) => api.get('employees/', searchParams),

    // Fetch a single employee by ID
    getById: (id) => api.get(`employees/${id}`),

    // Create a new employee
    create: (data) => api.post('employees/', data),

    // Update an existing employee by ID
    update: (id, data) => api.put(`employees/${id}`, data),

    // Delete a employee by ID
    delete: (id) => api.delete(`employees/${id}`),
};

export default employeeApi;
