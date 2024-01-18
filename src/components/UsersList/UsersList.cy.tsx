import React from 'react'
import UsersList from './UsersList'
import { User } from '../../types/user'
import { BrowserRouter } from 'react-router-dom'
import '../../index.css'

const users: User[] = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
]

const page = {
    getByDataCy: (name: string) => cy.get(`[data-cy="${name}"]`),
    users: () => page.getByDataCy('User'),
}

describe('UsersList component', () => {
    describe('by default', () => {
        beforeEach(() => {
            cy.mount(
                <BrowserRouter>
                    <UsersList users={users} />
                </BrowserRouter>
            )
        })

        it('should render all tabs', () => {
            page.users().should('have.length', 2)

            page.users().get('h2').eq(0).should('have.text', 'Leanne Graham')
            page.users().get('h2').eq(1).should('have.text', 'Ervin Howell')
        })

        it('should have a details link in each user', () => {
            page.users()
                .eq(0)
                .find('a')
                .should('have.text', 'Details')
                .should('have.attr', 'href', '/user/1')

            page.users()
                .eq(1)
                .find('a')
                .should('have.text', 'Details')
                .should('have.attr', 'href', '/user/2')
        })
    })
})
