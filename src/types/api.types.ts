import { ICustomerFromResponse } from "./customer.types";

export interface IRequestOptions {
    baseURL?: string;
    url: string;
    method: "get" | "post" | "put" | "delete";
    data?: object;
    headers?: Record<string, string>;
  }
  
  export interface IResponse<T extends object | null> {
    status: number;
    headers: object;
    body: T;
  }
  
  export interface IResponseFields {
    IsSuccess: boolean;
    ErrorMessage: string | null;
  }

  export interface ILoginResponse extends IResponseFields {
    User: {
        _id: string;
        username: string;
        firstName: string;
        lastName: string;
        roles: string[];
        createdOn: string;
    }
}

export type sortDirection = "asc" | "desc";

export type customersSortField = "createdOn" | "email" | "name" | "country";

export interface IMetricsResponse {
  IsSuccess: boolean;
  Metrics: {
      orders: {
          totalRevenue: number;
          totalOrders: number;
          averageOrderValue: number;
          totalCanceledOrders: number;
          recentOrders: IOrder[];
          ordersCountPerDay: {
              date: {
                  day: number;
                  month: number;
                  year: number;
              };
              count: number;
          }[];
      };
      customers: {
          totalNewCustomers: number;
          topCustomers: ITopCustomer[];
          customerGrowth: {
              date: {
                  day: number;
                  month: number;
                  year: number;
              };
              count: number;
          }[];
      };
      products: {
          topProducts: {
              name: string;
              sales: number;
          }[];
      };
  };
  ErrorMessage: string | null;
}

export interface IOrder {
  _id: string;
  status: string;
  customer: ICustomerFromResponse;
  products: IProduct[];
  delivery: any;
  total_price: number;
  createdOn: string;
  comments: any[];
  history: IOrderHistory[];
  assignedManager: IPerformer;
}


export interface IProduct {
  _id: string;
  name: string;
  amount: number;
  price: number;
  manufacturer: string;
  notes: string;
  received: boolean;
}

export interface IOrderHistory {
  status: string;
  customer: string;
  products: IProduct[];
  total_price: number;
  delivery: any;
  changedOn: string;
  action: string;
  performer: IPerformer;
}

export interface IPerformer {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  roles: string[];
  createdOn: string;
}

export interface ITopCustomer {
  _id: string;
  totalSpent: number;
  ordersCount: number;
  customerName: string;
  customerEmail: string;
}

export type productSortField = "createdOn" | "name" | "price" | "manufacturer";