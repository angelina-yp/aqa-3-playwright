/*Создайте ОДИН смоук тест со следующими шагами:

1. Переход на страницу https://anatoly-karpovich.github.io/demo-registration-form/
2. Заполните форму регистрации
3. Проверьте, что пользователь успешно зарегистрирован
*/
import { test, expect } from "@playwright/test";

test.describe("[UI][Smoke] registration", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-registration-form/");
    await page.locator('//button[@class="btn btn-primary"]').click();
  });

     test('fill in all fields', async ({
      page,
       }) => {
         await page.locator("#firstName").fill("ABC");
         await page.locator("#lastName").fill("QWERty");
         await page.locator("#address").fill("11-22");
         await page.locator("#email").fill("qwerty@rambler.ru");
         await page.locator("#phone").fill("123456");
         await page.locator("#country").selectOption("Canada");
         await page.locator("//input[@value='male']").click();
         await page.locator("//input[@value='Sports']").click();
         await page.locator("#language").fill("ru");
         await page.locator("#skills").selectOption("JavaScript");
         await page.locator("#year").selectOption("1991");
         await page.locator("#month").selectOption("September");
         await page.locator("#day").selectOption("12");
         await page.locator("#password").fill("123456");
         await page.locator("#password-confirm").fill("123456");
         await page.locator("//button[@class='btn btn-primary']").click();
         await expect(page).toHaveURL('https://anatoly-karpovich.github.io/demo-registration-form/');
         //await expect(page.url()).toBe('https://anatoly-karpovich.github.io/demo-registration-form/');
         await expect(page.locator('//h2[@class="text-center"]')).toContainText('Registration Details');

          await expect(page.locator("#fullName")).toContainText("ABC QWERty");
          await expect(page.locator("#address")).toContainText("11-22");
          await expect(page.locator("#email")).toContainText("qwerty@rambler.ru");
          await expect(page.locator("#phone")).toContainText("123456");
          await expect(page.locator("#country")).toContainText("Canada");
          await expect(page.locator("#gender")).toContainText("male");
          await expect(page.locator("#language")).toContainText("ru");
          await expect(page.locator("#skills")).toContainText("JavaScript");
          await expect(page.locator("#hobbies")).toContainText("Sports");
          await expect(page.locator("#dateOfBirth")).toContainText("12 September 1991");

          // Проверка значения в localStorage
    const storageValue = await page.evaluate(() => {
      return localStorage.getItem('formData');
    });
    expect(storageValue).toBe('{"firstName":"ABC","lastName":"QWERty","address":"11-22","email":"qwerty@rambler.ru","phone":"123456","gender":"male","language":"ru","year":"1991","month":"September","day":"12","country":"Canada","skills":["JavaScript"],"hobbies":["Sports"],"password":"123456"}');
        
          const locator = page.locator('#password');
          const innerText = await locator.innerText()
          await expect(innerText).toHaveLength(6);
          await expect(page.locator("#password")).toHaveText("******");
          
      });
    });    