describe('Find Pets by Status', () => {
  it('should get available pets', () => {
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/pet/findByStatus',
      headers: {
        accept: 'application/json',
      },
      qs: {
        status: 'available',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');

      response.body.forEach((pet) => {
        expect(pet).to.have.property('status', 'available');
      });
    });
  });
});
