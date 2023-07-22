describe('Delete User by Username', () => {
  it('should delete a user by username', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/user/Hamza',
      headers: {
        accept: 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
