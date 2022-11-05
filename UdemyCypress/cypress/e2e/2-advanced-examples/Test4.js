describe('Test Suite',function(){

it('Test Script',function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('tr td:nth-child(2)').each(($el , index, $list) =>{

    const course =$el.text()
    if(course.includes('Python'))
    {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

           const priceText= price.text()
           expect(priceText).to.equal('25')

        })

    }


})

})


})