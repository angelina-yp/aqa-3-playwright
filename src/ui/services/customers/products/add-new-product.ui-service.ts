import { expect, Page } from "@playwright/test";
import { apiConfig } from "config/api-config";
import { generateProductData } from "data/manufacturer.data";
import { STATUS_CODES } from "data/statusCode";

import _ from "lodash";
import { IProduct, IProductResponse } from "types/products.type";
import { AddNewProductPage } from "ui/pages/add-new-product.page";
import { ProductsPage } from "ui/pages/products.page";


export class AddNewProductUiService {
  private productsPage: ProductsPage;
  private addNewProductPage: AddNewProductPage;
  constructor(private page: Page) {
    this.addNewProductPage = new AddNewProductPage(page);
    this.productsPage = new ProductsPage(page);
  }
   async create(productData?: IProduct) {
    const data = generateProductData(productData);
    await this.addNewProductPage.fillInputs(data);
      const response = await this.addNewProductPage.interceptResponse<IProductResponse, any>(
      apiConfig.ENDPOINTS.PRODUCTS,
      this.addNewProductPage.clickSaveNewProduct.bind(this.addNewProductPage)
    );
    expect(response.status).toBe(STATUS_CODES.CREATED);
    expect(_.omit(response.body.Product, "_id", "createdOn")).toEqual({ ...data });
    await this.productsPage.waitForOpened();
    return response.body.Product;
  }

}