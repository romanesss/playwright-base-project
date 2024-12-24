import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import Credentials from '../data/credentials';

test('Ui login', async ({ app: { loginPage, shopPage }, page }) => {
    await loginPage.open();
    await loginPage.login(Credentials.getUserCredentials('standard'));
    expect(page.url()).toContain(shopPage.url);
});
