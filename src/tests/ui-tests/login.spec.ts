import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { TestUser } from '../../models/test-user.model';

test.describe('Login', () => {
    let testUser: TestUser;
    test.beforeEach(async ({ acceptanceHelpers }) => {
        testUser = await acceptanceHelpers.generateRandomUser();
    });

    test('Ui login', async ({ page, app: { loginPage, shopPage } }) => {
        await loginPage.open();
        await loginPage.login({ email: testUser.email, password: testUser.password });
        expect(page.url()).toContain(shopPage.url);
        await expect(shopPage.header.freeShoppingButton).toBeVisible();
    });

    test('Headless login', async ({ app, page, app: { shopPage } }) => {
        await app.headlessLogin({ email: testUser.email, password: testUser.password });
        await shopPage.open();
        expect(page.url()).toContain(shopPage.url);
        await expect(shopPage.header.freeShoppingButton).toBeVisible();
    });
});
