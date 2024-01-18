import { Address } from './address'

export type User = {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}
