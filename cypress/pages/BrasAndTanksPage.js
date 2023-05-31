class BrasAndTanksPage {
  getFirstProduct() {
    return cy.get("li.item.product.product-item:nth-child(1)");
  }

}

export default new BrasAndTanksPage();
