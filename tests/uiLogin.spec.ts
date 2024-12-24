import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import Credentials from '../helpers/credentials';

test('Ui login', async ({ app, page }) => {
    await app.loginPage.open();
    await app.loginPage.login(Credentials.getUserCredentials('standard'));
    expect(page.url()).toContain(app.shopPage.pagePath);
});
