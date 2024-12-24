import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import Credentials from '../data/credentials';

test('Api login', async ({ app, app: { shopPage }, page }) => {
    await app.authorization(Credentials.getUserCredentials('standard'));
    await shopPage.open();
    expect(page.url()).toContain(shopPage.url);
});
