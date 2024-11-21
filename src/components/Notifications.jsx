import React, { useState } from 'react';
import Badge from './Badge';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import {
    notificationsData,
    extraNotifications,
} from '../data/NotificationData';

export const Notifications = () => {
    const [notifications, setNotifications] = useState(notificationsData);

    return (
        <div className='w-full h-full overflow-y-auto flex flex-col justify-start items-start  scrollbar-thumb-third/20 scrollbar-track-third/10 scrollbar-thin'>
            {notifications.map((notification, index) => (
                <div
                    key={index}
                    className='w-full flex justify-between items-center h-fit my-2 bg-third/20 p-1 rounded-md'
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
            {notifications.length <= 5 && (
                <button
                    className='bg-third/20 w-full rounded-md h-8 p-2 text-black flex justify-center items-center'
                    onClick={() =>
                        setNotifications((prevNotifications) => [
                            ...prevNotifications,
                            ...extraNotifications,
                        ])
                    }
                >
                    More <MdOutlineExpandMore className='text-xl' />
                </button>
            )}
            {notifications.length > 5 && (
                <button
                    className='bg-third/20 w-full rounded-md h-8 p-2 text-black flex justify-center items-center'
                    onClick={() => setNotifications(notificationsData)}
                >
                    Less <MdOutlineExpandLess className='text-xl' />
                </button>
            )}
        </div>
    );
};
