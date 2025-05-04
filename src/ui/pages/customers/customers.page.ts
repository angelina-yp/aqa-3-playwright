import { Locator, Page } from "@playwright/test";

export class CustomersPage {
    waitForNotification(CUSTOMER_CREATED: any) {
        throw new Error("Method not implemented.");
    }
    waitForOpened() {
        throw new Error("Method not implemented.");
    }
    waitForSpinner() {
        throw new Error("Method not implemented.");
    }
    addNewCustomerButton: Locator;
    constructor(protected page: Page) {
        this.addNewCustomerButton = this.page.getByRole("button", {name: "Add Customer"});
    }
    async clickAddNewCustomer () {
        await this.addNewCustomerButton.click();
    }
}