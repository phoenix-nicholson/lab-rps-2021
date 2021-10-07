
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains body', ()=>{
            cy.get('body').should('be.visible');
        });
        it('contains winSpan', ()=>{
            cy.get('#wins').should('be.visible');
        });
        it('contains button', ()=> {
            cy.get('#play-btn').should('be.visible');
        });
        it('contains lossSpan', ()=> {
            cy.get('#losses').should('be.visible');
        });
        it('contains tieSpan', ()=> {
            cy.get('#ties').should('be.visible');
        });
    });
});