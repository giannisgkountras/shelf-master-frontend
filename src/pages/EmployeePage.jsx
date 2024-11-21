import React, { useEffect, useState } from 'react';
import employeeApi from '../api/employee';
import List from '../components/List';
import UpdateItem from '../components/UpdateItem';

const EmployeePage = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const columns = ['fullName', 'email', 'role', 'warehouseID'];
    useEffect(() => {
        employeeApi.getAll().then((response) => {
            setEmployees(response);
            console.log(response);
        });
    }, []);
    return (
        <div className='w-full h-full flex justify-evenly items-center'>
            <List
                data={employees}
                columns={columns}
                rowsPerPage={10}
                title={'Details of all Employees'}
                selected={selectedEmployee}
                setSelected={setSelectedEmployee}
            />
            <UpdateItem
                category={columns}
                entity={selectedEmployee}
                title={'Edit Employee'}
            />
        </div>
    );
};

export default EmployeePage;
