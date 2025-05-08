
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { NOTIFICATIONS } from "data/notification.data";
import { expect, test } from "fixtures/businessSteps.fixture";
/*Создайте e2e тест со следующими шагами:
1. Зайти на сайт Sales Portal
2. Залогиниться с вашими кредами
3. Перейти на страницу Customers List
4. Перейти на станицу Add New Customer
5. Создать покупателя
6. Проверить наличие покупателя в таблице
7. Кликнуть на кнопку "Delete" в таблице для созданного покупателя
8. В модалке удаления кликнуть кнопку Yes, Delete
9. Дождаться исчезновения модалки и загрузки страницы
10. Проверить, что покупатель отсутствует в таблице

Вам понадобится:

- PageObject модалки удаления покупателя
- Подключить модалку в PageObject страницы Customers
- Использовать фикстуры
*/ 


test.describe("[UI] [Sales Portal] [Customers]", async () => {
  test("Should add and delete customer on Customer page", async ({ loginAsLocalUser, homePage, customersPage, addNewCustomerPage }) => {
    //Зайти на сайт Sales Portal
    //Залогиниться с вашими кредами
    await loginAsLocalUser();
    await homePage.waitForOpened();
    //Перейти на страницу Customers List
    await homePage.clickModuleButton("Customers");
    await customersPage.waitForOpened();
    //Перейти на станицу Add New Customer
    await customersPage.clickAddNewCustomer();
    await addNewCustomerPage.waitForOpened();
    //Создать покупателя
    const data = generateCustomerData();
    await addNewCustomerPage.fillInputs(data);
    await addNewCustomerPage.clickSaveNewCustomer();
    await customersPage.waitForOpened();
    //Проверить наличие покупателя в таблице
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_CREATED);
    await expect(customersPage.tableRowByEmail(data.email)).toBeVisible();
    //Кликнуть на кнопку "Delete" в таблице для созданного покупателя
    await customersPage.clickTableAction(data.email, "delete");
    await customersPage.deleteCustomerModal.waitForOpened();
    //В модалке удаления кликнуть кнопку Yes, Delete
    await customersPage.deleteCustomerModal.clickDelete();
    //Дождаться исчезновения модалки и загрузки страницы
    await customersPage.deleteCustomerModal.waitForClosed();
    await customersPage.waitForOpened();
    //Проверить, что покупатель отсутствует в таблице
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_DELETED);
    await expect(customersPage.tableRowByEmail(data.email)).not.toBeVisible();

  });
});