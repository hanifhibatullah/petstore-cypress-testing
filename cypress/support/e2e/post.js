it('Create a user', () => {
    let body = {
        "id": 0,
        //"username": "hanif",
        "username": Cypress.env('username'),
        "firstName": "hanif",
        "lastName": "hibatullah",
        "email": "hanif@mailsec.com",
        "password": "password",
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