/*Разработать тест со следующими шагами:

  - открыть https://the-internet.herokuapp.com/
  - перейти на страницу Dynamic Controls
  - Дождаться появления кнопки Remove
  - Завалидировать текста в заголовке страницы
  - Чекнуть чекбокс
  - Кликнуть по кнопке Remove
  - Дождаться исчезновения чекбокса
  - Проверить наличие кнопки Add
  - Завалидировать текст It's gone!
  - Кликнуть на кнопку Add
  - Дождаться появления чекбокса
  - Завалидировать текст It's back!
*/
import { test, expect } from "@playwright/test";

test.describe("[UI] Dynamic Controls", () => {
  test("test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',  {name: "Dynamic Controls"}).click();
  
       const title = page.getByRole('heading', { name: 'Dynamic Controls' });
       
       await expect(title).toHaveText('Dynamic Controls');
       const text = page.locator('div.example > p');
       await expect(text).toHaveText('This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.');
       
       const subText = page.getByRole('heading', { name: 'Remove/add' });
       await expect(subText).toHaveText("Remove/add");
       await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();

       const checkBox = page.locator("input[type='checkbox']");
       await expect(checkBox).toBeVisible();
       await checkBox.check();
     
       const butRemove =page.getByRole('button', { name: 'Remove' });
       await butRemove.click();
       await expect (checkBox).toBeHidden();
       await expect (butRemove).toBeHidden();
         
       const butAdd = page.getByRole('button', { name: 'Add' });
       await expect(butAdd).toBeVisible();


       const message = page.locator("p#message");
       await expect(message).toHaveText("It's gone!");
       
       await butAdd .click();
       await expect(checkBox).toBeVisible();
       await expect(message).toHaveText("It's back!");
       

    });
    });