
import { SALES_PORTAL_URL, USER_LOGIN, USER_PASSWORD } from "config/enviroment";
import { test as base } from "./pages.fixture";

interface IBusinessSteps {
    loginAsLocalUser(): Promise<void>;
  }
  
  export const test = base.extend<IBusinessSteps>({
    loginAsLocalUser: async ({ homePage, signInPage }, use) => {
      await use(async () => {
        await signInPage.openPortal();
        await signInPage.fillCredentials({ email: USER_LOGIN, password: USER_PASSWORD });
        await signInPage.clickSubmitsButton();
        await homePage.waitForOpened();
      });
    },
  });
  
  export { expect } from "@playwright/test";