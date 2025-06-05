
import { expect } from "fixtures/pages.fixture";
import { productSortField } from "types/api.types";
import { IProductInTable } from "types/products.type";
import { SalesPortalPage } from "./salesPortal.page";
import { FilterModal } from "./moduls/customrs/filter.modals";
import { MANUFACTURER } from "data/manufacturer.data";
import numeral from "numeral";

export class ProductsPage extends SalesPortalPage {


  //кнопка добавления
  readonly addNewProductButton = this.page.getByRole("button", {
    name: "Add Product",
  });
  //поиск
  readonly searchInput = this.page.locator('input[type="search"]');
  readonly searchButton = this.page.locator("#search-products");
  readonly chipButton = this.page.locator(".chip");
  readonly searchChipButton = this.page.locator('div[data-chip-products="search"]');

  //фильтр
  readonly filterModal = new FilterModal(this.page);
  readonly filterButton = this.page.getByRole("button", { name: "Filter" });

  //таблица
  readonly table = this.page.locator("#table-products");

  //шапка таблицы
  readonly tableHeader = this.page.locator("#table-products th div[current]");
  readonly nameHeader = this.tableHeader.filter({ hasText: "Name" });
  readonly priceHeader = this.tableHeader.filter({ hasText: "Price" });
  readonly manufacturerHeader = this.tableHeader.filter({ hasText: "Manufacturer" });
  readonly createdOnHeader = this.tableHeader.filter({ hasText: "Created On" });

  //таблица (поля)
  readonly tableRow = this.page.locator("#table-products tbody tr");
  readonly tableRowByName = (name: string) => this.tableRow.filter({ has: this.page.getByText(name) });
  readonly nameCell = (name: string) => this.tableRowByName(name).locator("td").nth(0);
  readonly priceCell = (name: string) => this.tableRowByName(name).locator("td").nth(1);
  readonly manufacturerCell = (name: string) => this.tableRowByName(name).locator("td").nth(2);
  readonly createdOnCell = (name: string) => this.tableRowByName(name).locator("td").nth(3);
 
  readonly detailsButton = (name: string) => this.tableRowByName(name).getByTitle("Details");
  readonly editButton = (name: string) => this.tableRowByName(name).getByTitle("Edit");
  readonly deleteButton = (name: string) => this.tableRowByName(name).getByTitle("Delete");
 
  readonly uniqueElement = this.addNewProductButton;

  async clickAddNewProduct() {
    await this.addNewProductButton.click();
  }

  async clickDeleteProduct(productName: string) {
    await this.deleteButton(productName).click();
  }

  async clickFilter() {
    await this.filterButton.click();
  }

  async clickTableAction(productName: string, action: "details" | "edit" | "delete") {
    const buttons = {
      details: this.detailsButton(productName),
      edit: this.editButton(productName),
      delete: this.deleteButton(productName),
    };

    await buttons[action].click();
  }

  async getProductData(productName: string): Promise<IProductInTable> {
    const [name, price, manufacturer, createdOn] = await this.tableRowByName(productName).locator("td").allInnerTexts(); 
    return {
      name,
      price: numeral(price.trim()).value() ?? 0,
      manufacturer: manufacturer as MANUFACTURER,
      
    };
  }

   async getTabelData() {
    const tableData: Array<IProductInTable> = [];

    const rows = await this.tableRow.all();
    for (const row of rows) {
      const [name, price, manufacturer, createdOn] = await row.locator("td").allInnerTexts();
      tableData.push({
        name,
        price: numeral(price.trim()).value() ?? 0,
        manufacturer: manufacturer as MANUFACTURER,
       
      });
    }
    return tableData;
  }
///методы для поиск
  async fillSearch(value: string | number) {
    await this.searchInput.fill(String(value));
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async search(value: string | number) {
    await this.fillSearch(value);
    await this.clickSearch();
    await this.waitForOpened();
  }
//сортировка
   async clickTableHeader(header: productSortField) {
    switch (header) {
      case "name":
        await this.nameHeader.click();
        break;
      case "price":
        await this.priceHeader.click();
        break;
      case "manufacturer":
        await this.manufacturerHeader.click();
        break;
      case "createdOn":
        await this.createdOnHeader.click();
        break;
    }
  }
}