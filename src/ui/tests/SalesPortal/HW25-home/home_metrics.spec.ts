import { MetricsResponse } from "data/metrics.data";
import { expect, test } from "fixtures/businessSteps.fixture";

test.describe("[UI] [Metrics]", async () => {
   
    test(`Check the metric - Orders This Year`, async ({
        loginAsLocalUser,
        homePage,
        mock,
    }) => {

        await mock.metrics(MetricsResponse);
        await loginAsLocalUser();
        const ordersThisYear = await homePage.getMetrics('Orders This Year');
        expect.soft(ordersThisYear).toEqual(MetricsResponse.Metrics.orders.totalOrders);
    });


    test(`Check the metric - New Customers`, async ({
        loginAsLocalUser,
        homePage,
        mock,
    }) => {

        await mock.metrics(MetricsResponse);
        await loginAsLocalUser();
        const newCustomers = await homePage.getMetrics('New Customers');
        expect.soft(newCustomers).toEqual(MetricsResponse.Metrics.customers.totalNewCustomers);
    });


    test(`Check the metric - Canceled Orders`, async ({
        loginAsLocalUser,
        homePage,
        mock,
    }) => {

        await mock.metrics(MetricsResponse);
        await loginAsLocalUser();
        const cancelledOrders = await homePage.getMetrics('Canceled Orders');
        expect.soft(cancelledOrders).toEqual(MetricsResponse.Metrics.orders.totalCanceledOrders);
    }
    );
});
