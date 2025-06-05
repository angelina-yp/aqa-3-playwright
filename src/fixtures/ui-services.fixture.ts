
import { test as base } from "fixtures/pages.fixture";
import { AddNewCustomerUiService } from "ui/services/customers/add-new-customer.ui-service";
import { CustomersUIService } from "ui/services/customers/customers.ui-service";
import { EditCustomerUiService } from "ui/services/customers/edit-customer.ui-service";
import { AddNewProductUiService } from "ui/services/customers/products/add-new-product.ui-service";
import { HomeUIService } from "ui/services/home.ui-service";
import { ProductsUIService } from "ui/services/products.ui-service";
import { SignInUIService } from "ui/services/signIn.ui-serivice";


interface IUIServices {
  homeUIService: HomeUIService;
  signInUIService: SignInUIService;
  customersUIService: CustomersUIService;
  addNewCustomerUIService: AddNewCustomerUiService;
  editCustomerUIService: EditCustomerUiService;
  addNewProductUiService: AddNewProductUiService;
  productsUIService: ProductsUIService;
}

export const test = base.extend<IUIServices>({
  homeUIService: async ({ page }, use) => {
    await use(new HomeUIService(page));
  },
  signInUIService: async ({ page }, use) => {
    await use(new SignInUIService(page));
  },
  customersUIService: async ({ page }, use) => {
    await use(new CustomersUIService(page));
  },
  addNewCustomerUIService: async ({ page }, use) => {
    await use(new AddNewCustomerUiService(page));
  },
  editCustomerUIService: async ({ page }, use) => {
    await use(new EditCustomerUiService(page));
  },
  addNewProductUiService: async ({ page }, use) => {
    await use(new AddNewProductUiService(page));
  },
  productsUIService: async ({ page }, use) => {
    await use(new ProductsUIService(page));
  },
});

export { expect } from "@playwright/test";