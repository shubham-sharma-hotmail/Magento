// cypress/e2e/login.cy.js

describe('Magento Login Automation', () => {
  
  const userDetails = {
    email: 'testuser@example.com', // Use an email of an existing user
    password: 'Test@1234'
  };

  it('should log in the user', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    
    // Navigate to the login page
    cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/login/"]').click();
    
    // Fill the login form
    cy.get('#email').type(userDetails.email);
    cy.get('#pass').type(userDetails.password);
    
    // Submit the form
    cy.get('button#send2').click();
    
    // Verify login
    cy.contains('Welcome, Test User!');
  });
});
