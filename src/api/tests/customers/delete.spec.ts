//import test, { expect } from "@playwright/test";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/enviroment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { STATUS_CODES } from "data/statusCode";
import { expect, test } from "fixtures/contollers.fixture";


test.describe("[API] [Customers] [Delete]", () => {
   /* test.skip("Should delete customer", async ({ request }) => {
      const loginResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN, {
        data: { username: USER_LOGIN, password: USER_PASSWORD },
        headers: {
          "content-type": "application/json",
        },
      });
      const headers = loginResponse.headers();
      const token = headers["authorization"];
      expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK);
  
      const customerData = generateCustomerData();
      const customerResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMERS, {
        data: customerData,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const customerBody = await customerResponse.json();
      expect.soft(customerResponse.status()).toBe(STATUS_CODES.CREATED);
  
      const response = await request.delete(
        apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const deleteBody = await response.text();
      expect.soft(response.status()).toBe(STATUS_CODES.DELETED);
      expect.soft(deleteBody).toBe("");
    });*/
    test("Should delete customer", async ({ request, signInController}) => {
      
      const loginResponse = await signInController.signIn({ username: USER_LOGIN, password: USER_PASSWORD });
      const headers = loginResponse.headers;
      const token = (loginResponse.headers as Record<string, string>)["authorization"]
      expect.soft(loginResponse.status).toBe(STATUS_CODES.OK);
        
      const customerData = generateCustomerData();
      const customerResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMERS, {
        data: customerData,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const customerBody = await customerResponse.json();
      expect.soft(customerResponse.status()).toBe(STATUS_CODES.CREATED);
  
      const response = await request.delete(
        apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const deleteBody = await response.text();
      expect.soft(response.status()).toBe(STATUS_CODES.DELETED);
      expect.soft(deleteBody).toBe("");
  });
});