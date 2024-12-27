import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { TestUser } from '../../models/test-user.model';

test.describe('Register', () => {
    let testUser: TestUser;
    test.beforeEach(async ({ app: { registerPage } }) => {
        await registerPage.open();
    });

    test('verify successfully register', async ({ faker, page, app: { registerPage, dashboardPage } }) => {
        await registerPage.register({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        });
        await expect(page).toHaveURL(dashboardPage.url);
    });

    test(`verify inability to register with existed email`, async ({ faker, acceptanceHelpers, app: { registerPage } }) => {
        testUser = await acceptanceHelpers.generateRandomUser();

        await registerPage.register({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: testUser.email,
            password: faker.internet.password()
        });
        await expect(registerPage.errorNotification.message).toHaveText('That email address is already in use.');
    });

    test(`verify inability to register with empty email`, async ({ faker, app: { registerPage } }) => {
        await registerPage.register({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: '',
            password: faker.internet.password()
        });
        await expect(registerPage.emailInputWarning).toHaveText('Email is required.');
    });

    test(`verify inability to register with empty password`, async ({ faker, app: { registerPage } }) => {
        await registerPage.register({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: ''
        });
        await expect(registerPage.passwordInputWarning).toHaveText('Password is required.');
    });
});
