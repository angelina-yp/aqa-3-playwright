import { STATUS_CODES } from "data/statusCode";
import { expect, test } from "fixtures/ui-services.fixture";
import _ from "lodash";

test.describe("[E2E] [UI] [Products] [Create]", () => {
  let id = "";
  let token = "";
  test("Create product with smoke data", async ({
    signInUIService,
    homeUIService,
    productsUIService,
    addNewProductUiService,
    productController,
    productsPage,
  }) => {
    token = await signInUIService.signInAsLocalUser();

    await homeUIService.openModule("Products");

    await productsUIService.openAddPage();
    const createdCProduct = await addNewProductUiService.create();

        const response = await productController.getById(createdCProduct._id, token);
    id = createdCProduct._id;
    expect(response.status).toBe(STATUS_CODES.OK);

    const actualProductData = await productsPage.getProductData(createdCProduct.name);
    expect(actualProductData).toEqual(
      _.pick(createdCProduct, ["name", "price", "manufacturer"]) 

  );
});
  test.afterEach(async ({ productController }) => {
    await productController.delete(id, token);
  });
});
