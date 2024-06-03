import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import Credentials from '../helpers/credentials';

test('Api login', async ({ app, page }) => {
    await app.authorization(Credentials.getUserCredentials('standard'));
    await app.shopPage.open();
    expect(page.url()).toContain(app.shopPage.pagePath);
});
