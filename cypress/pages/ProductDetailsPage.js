

  class ProductDetailsPage {
    getProductSize() {
        return cy.get("#option-label-size-143-item-168");
      }
    
      getProductColor() {
        return cy.get("#option-label-color-93-item-59");
      }
    
      getProductQuantity() {
        return cy.get('#qty');
      }
    
      getAddToCartBtn() {
        return cy.get("#product-addtocart-button");
      }
  
  }
  
  export default new ProductDetailsPage();
  