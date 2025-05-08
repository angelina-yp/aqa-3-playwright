import test, { expect } from "@playwright/test";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { NOTIFICATIONS } from "data/notification.data";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";

/*test.describe("[UI] [Sales]", async () => {

    test("Create customers", async ({page}) => {
        const homePage = new HomePage(page);
        const customersPage = new CustomersPage(page);
        const addNewCustomerPage = new AddNewCustomerPage(page);
        await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");
        await page.locator('#emailinput').fill("test@gmail.com");
        await page.locator('#passwordinput').fill("12345678");
        await page.getByRole("button", {name: "Login"}).click();
        //const spinner = page.locator(".spinner-border");
        //const welcomTitle = page.locator(".welcome-text");

        //await expect(welcomTitle).toBeVisible();
        //await homePage.waitForSpinner();
        await homePage.waitForOpened();

        await homePage.clickModuleButton("Customers");

        //await expect(page.locator("h2")).toHaveText("Customer List ");
        //await customersPage.waitForSpinner();
        await customersPage.waitForOpened();
       
        await customersPage.clickAddNewCustomer(); 

        //await expect(page.locator("h2")).toHaveText("Add New Customer ");
        //await addNewCustomerPage.waitForSpinner();
        await addNewCustomerPage.waitForOpened();

        await addNewCustomerPage.fillInputs({
            email: "testcustomer@gmail.com";
            name: "Test Customer";
            country: COUNTRIES.FRANCE;
           
        })

        await page.locator('#inputEmail').fill("testcustomer@gmail.com");
        await page.locator('#inputName').fill("Test Customer");
        await page.locator('#inputCountry').fill("France");
        await page.locator('#inputCity').fill("Paris");
        await page.locator('#inputStreet').fill("test street");
        await page.locator('#inputHouse').fill("13");
        await page.locator('#inputFlat').fill("5");
        await page.locator('#inputPhone').fill("+11111111111");
        await page.locator('#textareaNotes').fill("test notes");

        await addNewCustomerPage.clickSaveNewCustomer();

        await customersPage.waitForOpened();

        await expect(page.locator(".toast-body")).toContainText("Customer was successfully created");
    });
});*/


test.describe("[UI] [Sales Portal] [Customers]", async () => {
  test("Should create customer with smoke data", async ({ page }) => {
    const homePage = new HomePage(page);
    const customersPage = new CustomersPage(page);
    const addNewCustomerPage = new AddNewCustomerPage(page);
    await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");
    await page.locator("#emailinput").fill("test@gmail.com");
    await page.locator("#passwordinput").fill("12345678");
    await page.getByRole("button", { name: "Login" }).click();

    await homePage.waitForOpened();
    await homePage.clickModuleButton("Customers");
    await customersPage.waitForOpened();
    await customersPage.clickAddNewCustomer();
    await addNewCustomerPage.waitForOpened();
    const data = generateCustomerData();
    await addNewCustomerPage.fillInputs(data);
    await addNewCustomerPage.clickSaveNewCustomer();
    await customersPage.waitForOpened();
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_CREATED);
  });

  test("Should NOT create customer with duplicated email", async ({ page }) => {
    const homePage = new HomePage(page);
    const customersPage = new CustomersPage(page);
    const addNewCustomerPage = new AddNewCustomerPage(page);
    await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");
    await page.locator("#emailinput").fill("test@gmail.com");
    await page.locator("#passwordinput").fill("12345678");
    await page.getByRole("button", { name: "Login" }).click();

    await homePage.waitForOpened();
    await homePage.clickModuleButton("Customers");
    await customersPage.waitForOpened();
    await customersPage.clickAddNewCustomer();
    await addNewCustomerPage.waitForOpened();
    const data = generateCustomerData();
    await addNewCustomerPage.fillInputs(data);
    await addNewCustomerPage.clickSaveNewCustomer();
    await customersPage.waitForOpened();
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_CREATED);

    await customersPage.clickAddNewCustomer();
    await addNewCustomerPage.waitForOpened();
    await addNewCustomerPage.fillInputs(generateCustomerData({ email: data.email }));
    await addNewCustomerPage.clickSaveNewCustomer();
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_DUPLICATED(data.email));
  });
});