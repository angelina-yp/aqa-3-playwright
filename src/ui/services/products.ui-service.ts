import { Page } from "@playwright/test";

import { IProduct } from "types/products.type";
import { AddNewProductPage } from "ui/pages/add-new-product.page";
import { ProductsPage } from "ui/pages/products.page";

export class ProductsUIService {
  private productsPage: ProductsPage;
  private addNewProductPage: AddNewProductPage;
  constructor(private page: Page) {
    this.productsPage = new ProductsPage(page);
    this.addNewProductPage = new AddNewProductPage(page);

  }

  async openAddPage() {
    await this.productsPage.clickAddNewProduct();
    await this.addNewProductPage.waitForOpened();
  }
}