/*import { Locator, Page} from "@playwright/test";
import Module from "module";
import { ModuleName } from "types/home.types";

export class HomePage {
    customersButton: Locator;
    productsButton: Locator;
    ordersButton: Locator;

    constructor(protected page: Page) {
        this.customersButton = this.page.getByRole("link", {name: "Cuctomer"});
        this.productsButton = this.page.getByRole("link", {name: "Products"});
        this.ordersButton = this.page.getByRole("link", {name: "Orders"});
    }
    /*async clickModuleButton(moduleName: "Customers" | "Products" | "Orders") {
        let moduleButton: Locator;

        if (moduleName === "Customers") moduleButton = this.customersButton;
        else if (moduleName === "Products") moduleButton = this.productsButton;
        else moduleButton  = this.ordersButton;

        async clickModuleButton(moduleName: ModuleName) {
            const moduleButtons: Record<ModuleName, Locator> = {
              Customers: this.customersButton,
              Products: this.productsButton,
              Orders: this.ordersButton,
        }

        await moduleButtons[moduleName].click();
    }
}*/


import { Locator, Page } from "@playwright/test";
import { ModuleName } from "types/home.types";
import { SalesPortalPage } from "./salesPortal.page";

export class HomePage extends SalesPortalPage {
  title = this.page.locator(".welcome-text");
  customersButton = this.page.getByRole("link", { name: "Customer" });
  productsButton = this.page.getByRole("link", { name: "Products" });
  ordersButton = this.page.getByRole("link", { name: "Orders" });

  uniqueElement = this.title;

  async clickModuleButton(moduleName: ModuleName) {
    const moduleButtons: Record<ModuleName, Locator> = {
      Customers: this.customersButton,
      Products: this.productsButton,
      Orders: this.ordersButton,
    };

    await moduleButtons[moduleName].click();
  }
}
