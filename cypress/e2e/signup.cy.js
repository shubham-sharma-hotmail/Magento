// cypress/e2e/signup.cy.js

describe('Magento Signup Automation', () => {
  
  const userDetails = {
    firstName: 'Test',
    lastName: 'User',
    email: `testuser${Math.floor(Math.random() * 10000)}@example.com`, // To avoid duplicate emails
    password: 'Test@1234'
  };

  it('should sign up a new user', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    
    // Navigate to the signup page
    cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/create/"]').click();
    
    // Fill the signup form
    cy.get('#firstname').type(userDetails.firstName);
    cy.get('#lastname').type(userDetails.lastName);
    cy.get('#email_address').type(userDetails.email);
    cy.get('#password').type(userDetails.password);
    cy.get('#password-confirmation').type(userDetails.password);
    
    // Submit the form
    cy.get('button[title="Create an Account"]').click();
    
    // Verify account creation
    cy.contains('Thank you for registering with Main Website Store.');
  });

});
