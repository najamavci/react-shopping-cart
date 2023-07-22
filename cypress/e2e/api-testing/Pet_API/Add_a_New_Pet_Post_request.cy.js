describe('Add a New Pet', () => {
  it('should add a new pet in store', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        id: 66,
        category: {
          id: 67,
          name: 'Cat',
        },
        name: 'doggie',
        photoUrls: ['doggy.jpg'],
        tags: [
          {
            id: 78,
            name: 'Cat and Dog',
          },
        ],
        status: 'available',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('id', 66);
      expect(response.body).to.have.property('name', 'doggie');
      expect(response.body.category).to.deep.equal({
        id: 67,
        name: 'Cat',
      });
      expect(response.body.photoUrls).to.deep.equal(['doggy.jpg']);
      expect(response.body.tags).to.deep.equal([
        {
          id: 78,
          name: 'Cat and Dog',
        },
      ]);
      expect(response.body).to.have.property('status', 'available');
    });
  });
});
