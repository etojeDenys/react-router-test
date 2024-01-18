import axios from 'axios'
import { User } from '../types/user'

export const fetchUser = async (userId: string): Promise<User> => {
    const response = await axios.get<User>(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    )

    return response.data
}
