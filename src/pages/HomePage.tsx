import React from 'react'
import { User } from '../types/user'
import UsersList from '../components/UsersList/UsersList'
import { useLoaderData } from 'react-router-dom'

const HomePage = () => {
    const users = useLoaderData() as User[]

    return <UsersList users={users} />
}

export default HomePage
