import { Link, useLoaderData } from 'react-router-dom'
import { User } from '../types/user'
import React from 'react'
import UserInfo from '../components/UserInfo/UserInfo'

const UserPage = () => {
    const user = useLoaderData() as User

    return (
        <div className="mx-auto mb-5 w-80">
            <UserInfo user={user} />
        </div>
    )
}

export default UserPage
