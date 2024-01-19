import React from 'react'
import { User } from '../../types/user'
import '../../index.css'
import UserInfo from './UserInfo'

const user: User = {
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
}

const page = {
    getByDataCy: (name: string) => cy.get(`[data-cy="${name}"]`),
    user: () => page.getByDataCy('UserInfo'),
}

describe('UserInfo component', () => {
    describe('by default', () => {
        beforeEach(() => {
            cy.mount(<UserInfo user={user} />)
        })

        it('should render company information', () => {
            page.getByDataCy('company').contains('Romaguera-Crona')
        })

        it('should render website link with correct href', () => {
            page.getByDataCy('website')
                .find('a')
                .should('have.attr', 'href', user.website)
        })

        it('should render company information', () => {
            page.getByDataCy('address').contains('Kulas Light')
        })
    })
})
