describe('Creation of reminder script', function(){


    it('creation of reminder test case',function(){

      cy.visit('https://beta3.canprevcommons.ca')
        cy.get('#email').type('shashi_s@trigent.com')
        cy.get('#password').type('Welcome@123')
        cy.get(':nth-child(5) > .w-full').click()
        cy.contains('Accounts Management').click()
        cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
        cy.get('#filterInput').type('test1252b')
        cy.contains('test1252b').click()
        cy.contains('Add Reminder').click()
        cy.get('#title').type('Test')
        cy.get('#description').type('Test')
        cy.get('#exp-date-datepicker__value_').type('{enter}')
        cy.get('#add_account_highlight_reminder_modal___BV_modal_footer_ > .btn-primary').click()
        cy.wait(2000)
        var reminderTitle=''
        cy.get('.text-truncate').then(function(actualReminderTitle){
                   reminderTitle = actualReminderTitle.text()
                   cy.log(reminderTitle)
        })
  
      cy.log('Reminder is created')
    })
  
  
  })
