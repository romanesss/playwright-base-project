import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { TestUser } from '../../models/test-user.model';
import { loginResponseSchema } from '../../schemas/login.schema';

test.describe('POST: /login', () => {
    let testUser: TestUser;
    test.beforeEach(async ({ acceptanceHelpers }) => {
        testUser = await acceptanceHelpers.generateRandomUser();
    });

    test('successful login should return valid code', async ({ app: { api } }) => {
        const response = await api.authController.login({
            email: testUser.email,
            password: testUser.password
        });
        expect((await response.json()).success).toBeTruthy();
    });

    test('successful login should match valid JSON schema', async ({ app: { api }, ajv }) => {
        const response = await api.authController.login({
            email: testUser.email,
            password: testUser.password
        });

        const validate = ajv.compile(loginResponseSchema);
        const isValid = validate(await response.json());
        expect(isValid).toBe(true);
    });

    test('unsuccessful login with wrong password should return 400 code', async ({ app: { api }, faker }) => {
        const response = await api.authController.login({
            email: testUser.email,
            password: testUser.password + faker.number.int()
        });
        expect(response.status()).toBe(400);
    });
});
