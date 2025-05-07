import { test as base } from "@playwright/test";

import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";
import { SideMenuComponent } from "ui/pages/sideMenu.page";
import { SignInPage } from "ui/pages/signIn.page";


interface ISalesPortalPages {
    homePage: HomePage;
    customersPage: CustomersPage;
    addNewCustomerPage: AddNewCustomerPage;
    signInPage: SignInPage;
    editCustomerPage: CustomersPage;
    sideMenu: SideMenuComponent;
  }
  
  export const test = base.extend<ISalesPortalPages>({
    homePage: async ({ page }, use) => {
      await use(new HomePage(page));
    },
    customersPage: async ({ page }, use) => {
      await use(new CustomersPage(page));
    },
    addNewCustomerPage: async ({ page }, use) => {
      await use(new AddNewCustomerPage(page));
    },
  
    signInPage: async ({ page }, use) => {
      await use(new SignInPage(page));
    },
    editCustomerPage: async ({ page }, use) => {
      await use(new CustomersPage(page));
    },
    sideMenu: async ({ page }, use) => {
      await use(new SideMenuComponent(page));
    },
  });
  
  // interface ISalesPortalPages {
  //   pages: Pages;
  // }
  
  // export const test = base.extend<ISalesPortalPages>({
  //   pages: async ({ page }, use) => {
  //     await use(new Pages(page));
  //   },
  // });
  
  export { expect } from "@playwright/test";

