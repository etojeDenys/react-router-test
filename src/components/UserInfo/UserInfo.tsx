import React from 'react'
import { User } from '../../types/user'

type Props = {
    user: User
}

const UserInfo: React.FC<Props> = ({
    user: { name, username, website, email, phone, address, company },
}) => (
    <ul className="flex flex-col gap-3" data-cy="UserInfo">
        <li className="text-2xl font-bold">{name}</li>

        <li>
            <span className="font-semibold italic">Username:</span> {username}
        </li>

        <li>
            <span className="font-semibold italic">Email:</span> {email}
        </li>

        <li>
            <span className="font-semibold italic">Phone:</span> {phone}
        </li>

        <li data-cy="address">
            <span className="font-semibold italic">Address:</span>
            <div className="ml-2 flex flex-col">
                <span>{address.city}</span>
                <span>{address.street}</span>
            </div>
        </li>

        <li data-cy="website">
            <span className="font-semibold italic">Website:</span>{' '}
            <a
                href={`https://${website}`}
                target="_blank"
                className="font-semibold italic text-blue-600 underline hover:text-blue-950"
            >
                {website}
            </a>
        </li>

        <li data-cy="company">
            <span className="font-semibold italic">Company:</span>
            <div className="ml-2 flex flex-col">
                <span>{company.name}</span>
                <span>{company.catchPhrase}</span>
            </div>
        </li>
    </ul>
)

export default UserInfo
