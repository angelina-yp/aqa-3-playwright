/*  Разработайте смоук тест-сьют с тестами на REGISTER на странице https://anatoly-karpovich.github.io/demo-login-form/

  Требования:
      Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
      Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен
*/


import { test, expect } from "@playwright/test";

test.describe("[UI][Smoke] authorization", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-login-form/");
    await page.locator("#registerOnLogin").click();
  });

  test('form with fields is displayed', async ({
    page,
     }) => {
       await expect(page.locator("#userNameOnRegister")).toBeVisible();
       await expect(page.locator("#passwordOnRegister")).toBeVisible();
       await expect(page.locator("#register")).toBeVisible();
       await expect(page.locator("#register")).toContainText("Register");
     });

     test('MAX Username and password length', async ({
      page,
       }) => {
         await page.locator("#userNameOnRegister").fill("ABCQWERTYUIOPLKJHGFDSAZXCVBNMKJHGFDSAQWE");
         await page.locator("#passwordOnRegister").fill("Abcccccc123456789632");
         await page.locator("#register").click();
         await expect(page.locator("#errorMessageOnRegister")).toContainText('Successfully registered! Please, click Back to return on login page');
      });

      test('min Username and password length', async ({
        page,
         }) => {
           await page.locator("#userNameOnRegister").fill("ABC");;
           await page.locator("#passwordOnRegister").fill("Abcccccc");
           await page.locator("#register").click();
           await expect(page.locator("#errorMessageOnRegister")).toContainText('Successfully registered! Please, click Back to return on login page');
        });

        test('entering special characters and numbers', async ({
          page,
           }) => {
             await page.locator("#userNameOnRegister").fill("!№%123");;
             await page.locator("#passwordOnRegister").fill("Ab!№;%:789");
             await page.locator("#register").click();
             await expect(page.locator("#errorMessageOnRegister")).toContainText('Successfully registered! Please, click Back to return on login page');
          });
    });