import api from './index';

const attendanceApi = {
    // Fetch all attendances
    getAll: (searchParams) => api.get('attendances/', searchParams),

    // Create a new attendance
    create: (data) => api.post('attendance/', data),

    // Update an existing attendance by ID
    update: (id, data) => api.post(`attendance/${id}`, data),

    // Delete an attendance by ID
    delete: (id) => api.delete(`attendance/${id}`),

    // Fetch all attendances related to a specific employee
    getAllByEmployeeId: (id) => api.get(`attendance/employees/${id}`),

    // Fetch details for the employees currently on duty at any warehouse of warehouse chain
    getAllEmployeesOnDuty: (searchParams) => api.get('attendance/employees-on-duty', searchParams),
    
    // Fetch details for the employees currently on duty at a specific warehouse
    getAllEmployeesOnDutyForSpecificWarehouse: (id) => api.get(`attendance/employees-on-duty/warehouses/${id}`),
};

export default attendanceApi;
