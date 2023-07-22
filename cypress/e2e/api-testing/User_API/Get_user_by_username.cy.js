describe('Get User by Username', () => {
  it('should get a user by username', () => {
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/Ali',
      headers: {
        accept: 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
