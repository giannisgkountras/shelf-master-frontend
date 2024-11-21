import React, { useEffect, useState } from 'react';
import employeeApi from '../api/employee';
import Loading from '../components/Loading';

const EmployeePage = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        employeeApi.getAll().then((response) => {
            setEmployees(response);
            console.log(response);
        });
    }, []);
    return (
        <div className='w-full h-full'>
            {employees.length === 0 && <Loading />}
            {employees &&
                employees.map((employee, index) => (
                    <div key={index} className='bg-third/20 w-fit m-2'>
                        <h2>{employee.fullName}</h2>
                        <h2>{employee.email}</h2>
                        <h2>{employee.role}</h2>
                        <h2>WarehouseID: {employee.warehouseID}</h2>
                        <h2>{employee.zip}</h2>
                    </div>
                ))}
        </div>
    );
};

export default EmployeePage;
