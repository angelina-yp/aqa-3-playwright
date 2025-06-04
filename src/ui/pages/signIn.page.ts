import { ISignIn } from "types/signIn.type";
import { SalesPortalPage } from "./salesPortal.page";

export class SignInPage extends SalesPortalPage{
  emailInput = this.page.locator("#emailinput");
  passwordInput = this.page.locator("#passwordinput");
  submitButton = this.page.getByRole("button", { name: "Login" });

  
    uniqueElement = this.submitButton;
     
    async fillCredentials(user: ISignIn) {
        user.username && (await this.emailInput.fill(user.username));
        user.password && (await this.passwordInput.fill(user.password));
    }
    async clickSubmitsButton() {
      await this.submitButton.click();
    }
  }