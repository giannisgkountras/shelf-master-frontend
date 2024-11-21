import React, { useEffect, useState } from 'react';
import employeeApi from '../api/employee';
import Loading from '../components/Loading';
import List from '../components/List';

const EmployeePage = () => {
    const [employees, setEmployees] = useState([]);
    const columns = ['fullName', 'email', 'role', 'warehouseID'];
    useEffect(() => {
        employeeApi.getAll().then((response) => {
            setEmployees(response);
            console.log(response);
        });
    }, []);
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <List
                data={employees}
                columns={columns}
                rowsPerPage={10}
                title={'Details of all Employees'}
            />
        </div>
    );
};

export default EmployeePage;
