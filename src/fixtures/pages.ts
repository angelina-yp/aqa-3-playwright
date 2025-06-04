import { Page } from "@playwright/test";
import { AddNewProductPage } from "ui/pages/add-new-product.page";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";
import { ProductsPage } from "ui/pages/products.page";

export class Pages {
    public homePage: HomePage;
    public customersPage: CustomersPage;
    public addNewCustomerPage: AddNewCustomerPage;
    public productsPage: ProductsPage;
    public addNewProductPage: AddNewProductPage;
    constructor(protected page: Page) {
      this.homePage = new HomePage(page);
      this.customersPage = new CustomersPage(page);
      this.addNewCustomerPage = new AddNewCustomerPage(page);
      this.productsPage = new ProductsPage(page);
    this.addNewProductPage = new AddNewProductPage(page);
    }
  }