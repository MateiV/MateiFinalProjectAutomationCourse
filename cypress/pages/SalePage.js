class SalePage{
    getSalesLink(){
        return  cy.get('a[href="https://magento.softwaretestingboard.com/sale.html"]');
    }

    getBrasAndTanksLink(){
        return cy.get('a[href="https://magento.softwaretestingboard.com/women/tops-women/tanks-women.html"]').contains("Bras & Tanks");
    }
  
  }
  
  export default new SalePage();