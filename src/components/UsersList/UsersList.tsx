import { User } from '../../types/user'
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    users: User[]
}

const UsersList: React.FC<Props> = ({ users }) => {
    return (
        <div className="mb-5 flex flex-col items-center gap-5">
            {users.map((user) => (
                <article className="min-w-80" data-cy="User" key={user.id}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <NavLink
                            to={`/user/${user.id}`}
                            className="rounded-2xl border-[1px] bg-blue-500 px-3 py-1 text-xs text-white transition duration-300 ease-in-out hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
                        >
                            {({ isPending }) =>
                                isPending ? 'Loading..' : 'Details'
                            }
                        </NavLink>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                        <span className="text-sm font-semibold">
                            @{user.username}
                        </span>

                        <div className="flex flex-col">
                            <span className="text-xs">{user.email}</span>
                            <span className="text-xs">{user.phone}</span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default UsersList
