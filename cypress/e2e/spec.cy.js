describe("entire page is loaded", ()=>{
  it("Home", ()=>{
    //!  get url
      cy.visit('/')

    //!  visit profiles
    cy.get(' a').click({multiple: true})

    // ! wait 5 sec and back to home page
    cy.wait(3000)
    cy.get('.back').click()

    // ! scroll to the footer
    cy.scrollTo('bottom')

    // ! going next page
    cy.get('span').contains('»').click()

    // ! scroll to the top
    cy.wait(2000)
    cy.scrollTo('top')
    
    // ! search for char smith
      cy.get('input').type('smith{enter}')

    // ! scroll to the footer
    cy.scrollTo('bottom')
    
    // ! scroll to the top
    cy.wait(2000)
    cy.scrollTo('top')

    //!  visit searched profiles
    cy.get('.nav-link').contains('Home').click()
  })
})