describe('Delete a Pet', () => {
  it('should delete a pet', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/pet/66',
      headers: {
        accept: 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
