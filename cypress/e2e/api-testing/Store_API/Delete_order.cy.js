describe('Delete Order by ID', () => {
  it('should delete an order by ID', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/store/order/1',
      headers: {
        accept: 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
