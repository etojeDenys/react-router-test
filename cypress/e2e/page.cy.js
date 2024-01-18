/// <reference types="cypress" />

import users from '../fixtures/users.json'
import user from '../fixtures/user.json'

const PAGE_URL = 'http://localhost:3000/'

const page = {
    getByDataCy: (name) => cy.get(`[data-cy="${name}"]`),
    users: () => page.getByDataCy('User'),
}

describe('example to-do app', () => {
    beforeEach(() => {
        cy.intercept(`https://jsonplaceholder.typicode.com/users`, {
            statusCode: 200,
            body: users,
        }).as('users')

        cy.visit('http://localhost:3000/')
        cy.wait('@users')
    })

    it('should display all users', () => {
        page.users().should('have.length', users.length)
    })

    it('should display users nav link with correct href', () => {
        cy.get('nav a')
            .should('have.text', 'Users')
            .should('have.attr', 'href', '/')
    })

    it('should have url equals "/"', () => {
        cy.location('pathname').should('eq', '/')
    })

    it('should display user details when click on details button', () => {
        cy.fixture('users.json')
            .then((data) => {
                cy.intercept(
                    'GET',
                    `https://jsonplaceholder.typicode.com/users/${users[0].id}`,
                    (req) => {
                        req.reply((res) => {
                            res.statusCode = 200
                            res.body = data[0]
                        })
                    }
                )
            })
            .as('user')

        page.users()
            .find('a')
            .eq(0)
            .should('have.attr', 'href', `/user/${users[0].id}`)
            .click()

        cy.wait('@user')

        cy.location('pathname').should('eq', `/user/${users[0].id}`)
    })

    it('should display users when click on users link', () => {
        cy.intercept(
            `https://jsonplaceholder.typicode.com/users/${users[0].id}`,
            {
                statusCode: 200,
                body: user,
            }
        ).as('user')

        page.users()
            .find('a')
            .eq(0)
            .should('have.attr', 'href', `/user/${users[0].id}`)
            .click()

        cy.wait('@user')

        cy.location('pathname').should('eq', `/user/${users[0].id}`)
    })

    it('should render the Error page on error', () => {
        cy.intercept(
            `https://jsonplaceholder.typicode.com/users/${users[0].id}`,
            {
                statusCode: 404,
                body: user,
            }
        ).as('user')

        page.users()
            .find('a')
            .eq(0)
            .should('have.attr', 'href', `/user/${users[0].id}`)
            .click()

        cy.wait('@user')

        cy.get('h1').should('have.text', 'Something went wrong')
    })
})
