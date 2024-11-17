import React from 'react'
import Badge from './Badge'
import { MdOutlineExpandMore } from 'react-icons/md'
import { IoMdNotifications } from 'react-icons/io'

export const Notifications = () => {
    const notifications = [
        {
            title: 'Order',
            color: 'green',
            message: 'You have a new order from customer AlexINC',
            timestamp: '09:24',
        },
        {
            title: 'Prod.',
            color: 'red',
            message: 'Product #08312 is running low on stock',
            timestamp: '09:18',
        },
        {
            title: 'Cust.',
            color: 'yellow',
            message: 'You have a new customer: GeorgeBros',
            timestamp: '09:03',
        },
        {
            title: 'Suppl.',
            color: 'blue',
            message: 'Supplier PapaNick has new products',
            timestamp: '08:45',
        },
        {
            title: 'Empl.',
            color: 'pink',
            message: 'Employee Giannis checked in',
            timestamp: '07:49',
        },
    ]
    return (
        <div className='w-full h-fit flex flex-col justify-start items-start'>
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    className='w-full flex justify-between items-center h-fit my-2 bg-third/20 p-1 rounded-md'
                    style={{ opacity: 1 - index / 10 }}
                >
                    <p className='mx-2 text-sm'>{notification.message}</p>
                    <div className='flex justify-center items-center flex-col w-fit h-fit'>
                        <p className='my-1 text-center text-xs'>
                            {notification.timestamp}
                        </p>
                        <Badge
                            color={notification.color}
                            text={notification.title}
                        ></Badge>
                    </div>
                </div>
            ))}
            <button className='bg-third/20 w-full rounded-md h-8 p-2 text-black flex justify-center items-center'>
                More <MdOutlineExpandMore className='text-xl' />
            </button>
        </div>
    )
}
