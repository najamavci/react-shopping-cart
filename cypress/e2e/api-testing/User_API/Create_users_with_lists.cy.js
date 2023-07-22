describe('Create Users with List', () => {
  it('should create users with a list', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithList',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: [
        {
          id: 0,
          username: 'Ali',
          firstName: 'Dali',
          lastName: 'AVCI',
          email: 'GRR',
          password: '123456',
          phone: '47896532547',
          userStatus: 0,
        },
      ],
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.include('application/json');
    });
  });
});
