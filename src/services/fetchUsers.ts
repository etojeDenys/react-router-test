import axios from 'axios'
import { User } from '../types/user'
import Error from '../components/Error'
import { API_URL } from '../constants'

export const fetchUsers = async () => {
    const response = await axios.get<User[]>(`${API_URL}/users`)

    return response.data
}
