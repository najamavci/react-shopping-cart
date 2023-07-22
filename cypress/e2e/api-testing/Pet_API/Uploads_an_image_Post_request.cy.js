describe('Uploads an Image for Pet', () => {
  it('should upload a new image for Pet', () => {
    cy.fixture(
      'isolated-happy-smiling-dog-white-background-portrait-4.jpg',
      'binary'
    ).then((fileContent) => {
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet/77/uploadImage',
        headers: {
          accept: 'application/json',
          'Content-Type': 'multipart/form-data; boundary=boundarystring',
        },
        body: `--boundarystring\r\nContent-Disposition: form-data; name="additionalMetadata"\r\n\r\nMico\r\n--boundarystring\r\nContent-Disposition: form-data; name="file"; filename="isolated-happy-smiling-dog-white-background-portrait-4.jpg"\r\nContent-Type: image/jpeg\r\n\r\n${fileContent}\r\n--boundarystring--`,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });
});
