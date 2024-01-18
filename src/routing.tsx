import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import { fetchUsers } from './services/fetchUsers'
import UserPage from './pages/UserPage'
import { fetchUser } from './services/fetchUser'
import React from 'react'
import Error from './components/Error'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                index: true,
                element: <HomePage />,
                loader: fetchUsers,
                shouldRevalidate: ({ currentUrl }) => {
                    return false
                },
            },
            {
                path: '/user/:userId',
                element: <UserPage />,
                loader: ({ params }) => fetchUser(params.userId!),
            },
        ],
    },
])
