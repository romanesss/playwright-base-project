import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import Credentials from '../data/credentials';

test('Headless login', async ({ app, page, app: { shopPage } }) => {
    await app.headlessLogin(Credentials.getUserCredentials('standard'));
    await shopPage.open();
    expect(page.url()).toContain(shopPage.url);
    await expect(shopPage.header.freeShoppingButton).toBeVisible();
});
