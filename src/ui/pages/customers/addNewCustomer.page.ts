import { Locator, Page } from "@playwright/test";
import { ICustomer } from "types/customer.types";

export class AddNewCustomerPage {
    waitForOpened() {
        throw new Error("Method not implemented.");
    }
    waitForSpinner() {
        throw new Error("Method not implemented.");
    }
    emailInput: Locator;
    nameInput: Locator;
    countryInput: Locator;
    streetInput: Locator;
    cityInput: Locator;
    houseInput: Locator;
    flatInput: Locator;
    phoneInput: Locator;
    notesInput: Locator;
    saveNewCustomerButton: Locator;

    constructor(protected page: Page) {
        this.emailInput = this.page.locator('#inputEmail');
        this.cityInput = this.page.locator('#inputCity');
        this.countryInput = this.page.locator('#inputCountry');
        this.flatInput = this.page.locator('#inputFlat');
        this.houseInput = this.page.locator('#inputHouse');
        this.phoneInput = this.page.locator('#inputPhone');
        this.notesInput = this.page.locator('#textareaNotes');
        this.nameInput = this.page.locator('#inputName');
        this.streetInput = this.page.locator('#inputStreet');
        this.saveNewCustomerButton = this.page.locator("#save-new-customer");
    }
    async fillInputs(customer: Partial<ICustomer>) {
        customer.email && (await this.emailInput.fill(customer.email));
        customer.name && (await this.nameInput.fill(customer.name));
        customer.country && (await this.countryInput.selectOption(customer.country));
        customer.city && (await this.cityInput.fill(customer.city));
        customer.street && (await this.streetInput.fill(customer.street));
        customer.house && (await this.houseInput.fill(customer.house.toString()));
        customer.flat && (await this.flatInput.fill(customer.flat.toString()));
        customer.phone && (await this.phoneInput.fill(customer.phone));
        customer.notes && (await this.notesInput.fill(customer.notes));
      }
    
      async clickSaveNewCustomer() {
        await this.saveNewCustomerButton.click();
      }

}

