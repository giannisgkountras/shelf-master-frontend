import attendanceApi from "../api/attendance";

const fetchNotificationsData = async () => {
    const attendances = await attendanceApi.getAll();
    
    const notificationsAttendances = attendances.map((att) => ({
        employeeRole: att.role === 'Admin' ? 'Admin': 'Employee',
        color: att.role === 'Admin' ? 'green': 'softYellow',
        message: 
            `The employee ${att.fullName} ${att.status === 1 ? 'checked-in': 'checked-out'}
             of warehouse ${att.warehouseID}.`,
        timestamp: new Date(att.timestamp).toLocaleString([], {
            year: 'numeric',
            month: '2-digit',
            day:'2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }),
    }));

    if (notificationsAttendances.length < 4) {
        return { notificationsAttendances, extraNotificationsData: [] };
    };

    const notificationsData = notificationsAttendances.slice(0, 4);
    const extraNotificationsData = notificationsAttendances.slice(4);

    return {notificationsData, extraNotificationsData};
};

// const notificationsData = [
//     {
//         title: 'Order',
//         color: 'green',
//         message: 'You have a new order from customer AlexINC',
//         timestamp: '09:24',
//     },
//     {
//         title: 'Prod.',
//         color: 'red',
//         message: 'Product #08312 is running low on stock',
//         timestamp: '09:18',
//     },
//     {
//         title: 'Cust.',
//         color: 'yellow',
//         message: 'You have a new customer: GeorgeBros',
//         timestamp: '09:03',
//     },
//     {
//         title: 'Empl.',
//         color: 'pink',
//         message: 'Employee Giannis checked in',
//         timestamp: '07:49',
//     },
// ];
// const extraNotifications = [
//     {
//         title: 'Alert',
//         color: 'red',
//         message: 'Server #13 is down. Immediate action required!',
//         timestamp: '10:07',
//     },
//     {
//         title: 'Review',
//         color: 'yellow',
//         message: 'Customer JohnDoe left a 5-star review on Product #455',
//         timestamp: '09:45',
//     },
//     {
//         title: 'Update',
//         color: 'purple',
//         message: 'New software update available: v1.4.2',
//         timestamp: '09:30',
//     },
//     {
//         title: 'Payment',
//         color: 'green',
//         message: 'Invoice #78421 has been paid by ClientX',
//         timestamp: '08:50',
//     },
//     {
//         title: 'Meeting',
//         color: 'pink',
//         message: 'You have a scheduled meeting with the Sales Team at 11:00 AM',
//         timestamp: '08:30',
//     },
// ];

export default fetchNotificationsData;
