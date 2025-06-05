/*import { APIRequestContext, expect } from "@playwright/test";
import { SignInController } from "api/controllers/HW24_signIn.controller";
import { USER_LOGIN, USER_PASSWORD } from "config/enviroment";
import { STATUS_CODES } from "data/statusCode";
import { validateResponse } from "utils/validations/responseValidation";


export class SignInApiService {
    controller: SignInController;
    constructor(request: APIRequestContext) {
        this.controller = new SignInController(request);
    }

    async loginAsLocalUser() {
        const response = await this.controller.signIn({
            username: USER_LOGIN,
            password: USER_PASSWORD,
        });

        validateResponse(response, STATUS_CODES.OK, true, null);
        const token = (response.headers as unknown as Record<string, string>)["authorization"];
        return token;
    }
}*/