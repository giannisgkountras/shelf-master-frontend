import React from 'react';
import employeeApi from '../api/employee';
import GenericViewUpdate from '../components/GenericViewUpdate';
import AttendanceGraph from '../components/AttendanceGraph';

const EmployeePage = () => {
    const columns = ['fullName', 'email', 'role', 'warehouseID'];
    return (
        <div className='flex w-full h-full flex-col justify-center items-center relative overflow-hidden'>
            <GenericViewUpdate
                api={employeeApi}
                columns={columns}
                title='Employee'
                entityName='Employee'
            />
            {/* <AttendanceGraph /> */}
        </div>
    );
};

export default EmployeePage;
