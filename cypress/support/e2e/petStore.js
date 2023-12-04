describe('Petstore API Inventory Testing', () => {
    it('Create a user', () => {
        let body = {
            "id": 0,
            //"username": "hanif",
            "username": Cypress.env('username'),
            "firstName": "hanif",
            "lastName": "hibatullah",
            "email": "hanif@mailsec.com",
            //"password": "password",
            "password": Cypress.env('password'),
            "phone": "123123",
            "userStatus": 0    
        }
        //console.log(body)
        cy.request('POST','/user', body).as('createUser')
        //add new todo item by defining todo name
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200)
        })
    })
    const loginUser = {
        method : 'GET',
        url : '/user/login',
        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }
    it('Login a user', () => {
        cy.request(loginUser).as('loginUser')
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.equal(200)
        })
    })
})