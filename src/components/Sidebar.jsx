import { NavLink, useLocation } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { IoMdCart } from 'react-icons/io'
import { PiWarehouseFill } from 'react-icons/pi'
import { HiUsers } from 'react-icons/hi'
import { GiWoodenCrate } from 'react-icons/gi'
import { MdWork } from 'react-icons/md'
import { useEffect, useState } from 'react'
import logo from '../assets/shelfmastertext.png'
import { Notifications } from './Notifications'

const Sidebar = () => {
    const [active, setActive] = useState('Dashboard')
    const location = useLocation()

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActive('Dashboard')
                break
            case '/products':
                setActive('Products')
                break
            case '/warehouses':
                setActive('Warehouses')
                break
            case '/customers':
                setActive('Customers')
                break
            case '/suppliers':
                setActive('Suppliers')
                break
            case '/employees':
                setActive('Employees')
                break
            default:
                setActive('None')
        }
    }, [location.pathname])

    const routes = [
        { to: '/', name: 'Dashboard', icon: <AiFillHome /> },
        { to: '/products', name: 'Products', icon: <IoMdCart /> },
        { to: '/warehouses', name: 'Warehouses', icon: <PiWarehouseFill /> },
        { to: '/customers', name: 'Customers', icon: <HiUsers /> },
        { to: '/suppliers', name: 'Suppliers', icon: <GiWoodenCrate /> },
        { to: '/employees', name: 'Employees', icon: <MdWork /> },
    ]
    const activeStyle = {
        color: '#F7F7F7',
        backgroundColor: '#2F3061',
    }

    return (
        <div className='div w-80 h-full flex flex-col justify-evenly items-center shadow-2xl'>
            <NavLink to={'/'}>
                <img
                    src={logo}
                    alt='ShelfMaster Logo'
                    className='w-full px-2 py-8'
                ></img>
            </NavLink>
            <nav className='w-full text-black flex flex-col px-4 justify-center h-fit items-center'>
                <h1 className='text-2xl font-semibold text-black border-solid border-b-2 border-black w-11/12 mb-2 text-center'>
                    Menu
                </h1>
                {routes.map((route, index) => (
                    <NavLink
                        key={index}
                        to={route.to}
                        className='mb-3 px-4 py-1 hover:text-hover rounded-md w-full flex justify-start items-center bg-third/20'
                        style={active === route.name ? activeStyle : {}}
                    >
                        <div className='mr-2 text-2xl'>{route.icon}</div>
                        <div className='text-2xl font-semibold'>
                            {route.name}
                        </div>
                    </NavLink>
                ))}
            </nav>
            <div className='w-full text-black flex flex-col px-4 mt-8 justify-center h-fit items-center'>
                <h1 className='text-2xl font-semibold text-black border-solid border-b-2 border-black w-11/12 mb-2 text-center'>
                    Notifications
                </h1>
                <Notifications />
            </div>

            <div className='w-full p-4'>
                <button className='bg-third w-full'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar
