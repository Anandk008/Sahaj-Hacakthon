// cypress/integration/hello_world_spec.js

describe('Hello World API', () => {
  it('should return Hello, World!', () => {
    // Replace with your actual API endpoint
    const apiUrl = 'http://localhost:8080/greeting';

    cy.request(apiUrl).then((response) => {
      // Check that the status code is 200
      expect(response.status).to.eq(200);

      // Check that the response body is "Hello, World!"
      expect(response.body).to.eq('Hello, World!');
    });
  });
});
