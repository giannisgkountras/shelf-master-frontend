import React from 'react';
import employeeApi from '../api/employee';
import GenericViewUpdate from '../components/GenericViewUpdate';

const EmployeePage = () => {
    const columns = ['fullName', 'email', 'role', 'warehouseID'];
    return (
        <GenericViewUpdate
            api={employeeApi}
            columns={columns}
            title='Employee'
            entityName='Employee'
        />
    );
};

export default EmployeePage;
