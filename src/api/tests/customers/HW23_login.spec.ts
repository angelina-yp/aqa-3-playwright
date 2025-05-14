import test, { expect } from "@playwright/test";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/enviroment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { loginSchema } from "data/schemas/customers/HW23_login.schem";
import { STATUS_CODES } from "data/statusCode";
import { validateSchema } from "utils/validations/schemaValidation";


test.describe("[API] [User] [Login]", () => {
    test("Should login user", async ({ request }) => {
      const loginResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN, {
        data: { username: USER_LOGIN, password: USER_PASSWORD },
        headers: {
          "content-type": "application/json",
        },
      });
      const headers = loginResponse.headers();
      const token = headers["authorization"];
      const bodyLogin = await loginResponse.json();

      expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK);
      expect.soft(token).toBeTruthy();
      validateSchema(loginSchema, bodyLogin);
      
    });
  });