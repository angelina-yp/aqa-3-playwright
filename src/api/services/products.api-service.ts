import { APIRequestContext, expect } from "@playwright/test";
import { ProductController } from "api/controllers/product.controller";
import { generateProductData } from "data/manufacturer.data";
import { STATUS_CODES } from "data/statusCode";
import { IProduct } from "types/products.type";
import { validateResponse } from "utils/validations/responseValidation";


export class ProductsApiService {
  controller: ProductController;
  constructor(request: APIRequestContext) {
    this.controller = new ProductController(request);
  }

  async create(token: string, productData?: IProduct) {
    const body = generateProductData(productData);
    const response = await this.controller.create(body, token);
    validateResponse(response, STATUS_CODES.CREATED, true, null);
    return response.body.Product;
  }
}
