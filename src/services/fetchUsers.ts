import axios from 'axios'
import { User } from '../types/user'
import Error from '../components/Error'

export const fetchUsers = async () => {
    const response = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
    )

    return response.data
}
