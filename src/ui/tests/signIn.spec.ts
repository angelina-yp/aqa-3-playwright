import test from "@playwright/test";
import { signInDate } from "data/signIn.data";
import { SignInPage } from "ui/pages/signIn.page";


test.describe("[UI] [Sign In]", async () => {
    test("Should create customer with smoke data", async ({ page }) => {
      const signInPage = new SignInPage(page);  
           
      await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");
      await signInPage.fillInput(signInDate);
      await signInPage.clickSubmitsButton();
      
    });
});