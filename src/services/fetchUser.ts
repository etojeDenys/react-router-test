import axios from 'axios'
import { User } from '../types/user'
import { API_URL } from '../constants'

export const fetchUser = async (userId: string): Promise<User> => {
    const response = await axios.get<User>(`${API_URL}/users/${userId}`)

    return response.data
}
