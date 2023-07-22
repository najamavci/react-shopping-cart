describe('Update User by Username', () => {
  it('should update a user by username', () => {
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/user/Ali',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        id: 0,
        username: 'Hamza',
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        password: 'string',
        phone: 'string',
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
