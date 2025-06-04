import { faker } from "@faker-js/faker";
import { IProduct } from "types/products.type";
import { getRandromEnumValue } from "utils/enum.utils";

export enum MANUFACTURER {
  APPLE = "Apple",
  SAMSUNG = "Samsung",
  GOOGLE = "Google",
  MICROSOFT = "Microsoft",
  SONY = "Sony",
  XIAOMI = "Xiaomi",
  AMAZON = "Amazon",
  TESLA = "Tesla",
}

export function generateProductData(params?: Partial<IProduct>): IProduct {
  return {
    name: `TestVita ${faker.string.alpha(31)}`,
    manufacturer: getRandromEnumValue(MANUFACTURER),
    price: faker.number.int(99999),
    amount: faker.number.int(5),
    notes: `Notes ${faker.string.alpha(244)}`,
    ...params,
  };
}