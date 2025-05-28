import { IMetricsResponse } from "types/api.types";

export const MetricsResponse: IMetricsResponse = {
    IsSuccess: true,
    Metrics: {
        orders: {
            totalRevenue: 1,
            totalOrders: 2,
            averageOrderValue: 3,
            totalCanceledOrders: 4,
            recentOrders: [],
            ordersCountPerDay: [
                {
                    date: {
                        day: 11,
                        month: 22,
                        year: 2025
                    },
                    count: 1
                },
                {
                    date: {
                        day: 22,
                        month: 11,
                        year: 2025
                    },
                    count: 2
                }
            ]
        },
        customers: {
            totalNewCustomers: 111,
            topCustomers: [
                {
                    _id: "1111",
                    totalSpent: 25000,
                    ordersCount: 3,
                    customerName: "Angelina",
                    customerEmail: "angelina-yp@rambler.ru"
                },
                {
                    _id: "222",
                    totalSpent: 555,
                    ordersCount: 888,
                    customerName: "Ivan",
                    customerEmail: "ivan@gmail.com"
                }
            ],
            customerGrowth: [
                {
                    date: {
                        year: 2025,
                        month: 3,
                        day: 25
                    },
                    count: 4
                },
                {
                    date: {
                        year: 2025,
                        month: 11,
                        day: 22
                    },
                    count: 5
                }
            ]
        },
        products: {
            topProducts: [
                {
                    name: "Gloves66160",
                    sales: 1
                },
                {
                    name: "Chair26526",
                    sales: 1
                }
            ]
        }
    },
    ErrorMessage: null
};