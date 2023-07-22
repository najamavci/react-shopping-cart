describe('Update a Pet', () => {
  it('should update a pet', () => {
    // First, update the pet information
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        id: 4512,
        category: {
          id: 0,
          name: 'Gaffy',
        },
        name: 'doggie',
        photoUrls: ['string'],
        tags: [
          {
            id: 0,
            name: 'string',
          },
        ],
        status: 'available',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

      // Additional verification: Fetch the pet by its ID and check if the information matches the updated values.
      cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/4512', // Fetching the pet by its ID (4512)
        headers: {
          accept: 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(4512); // Verify if the pet's ID is the same as the updated ID.
        expect(response.body.category.id).to.equal(0);
        expect(response.body.category.name).to.equal('Gaffy');
        expect(response.body.name).to.equal('doggie');
        expect(response.body.photoUrls).to.deep.equal(['string']);
        expect(response.body.tags[0].id).to.equal(0);
        expect(response.body.tags[0].name).to.equal('string');
        expect(response.body.status).to.equal('available');
      });
    });
  });
});
