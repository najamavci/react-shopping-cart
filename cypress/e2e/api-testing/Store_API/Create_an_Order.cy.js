describe('Http Request', () => {
  it('POST call', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/store/order',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        id: 1,
        petId: 123,
        quantity: 5,
        shipDate: '2023-07-21T12:01:19.800Z',
        status: 'placed',
        complete: true,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
