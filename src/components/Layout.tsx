import { NavLink, Outlet, useNavigation } from 'react-router-dom'
import React from 'react'
import Loader from './Loader'

const Layout = () => {
    const navigation = useNavigation()

    const isLoading = navigation.state === 'loading'

    return (
        <>
            <nav className="mx-10 my-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-gray-400 underline'
                            : 'hover:text-gray-400'
                    }
                >
                    Users
                </NavLink>
            </nav>
            {isLoading ? <Loader /> : <Outlet />}
        </>
    )
}

export default Layout
