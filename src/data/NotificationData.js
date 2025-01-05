import attendanceApi from '../api/attendance';

const fetchNotificationsData = async () => {
    const attendances = await attendanceApi.getAll();

    const notificationsAttendances = attendances.map((att) => ({
        employeeRole: att.role === 'Admin' ? 'Admin' : 'Employee',
        color: att.role === 'Admin' ? 'green' : 'softYellow',
        message: `The employee ${att.fullName} ${att.status === 1 ? 'checked-in' : 'checked-out'}
             of warehouse ${att.warehouseID}.`,
        timestamp: new Date(att.timestamp).toLocaleString([], {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }),
    }));

    if (notificationsAttendances.length < 3) {
        return { notificationsAttendances, extraNotificationsData: [] };
    }

    const notificationsData = notificationsAttendances.slice(0, 3);
    const extraNotificationsData = notificationsAttendances.slice(3);

    return { notificationsData, extraNotificationsData };
};

export default fetchNotificationsData;
