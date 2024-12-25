import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { registerResponseSchema } from '../../schemas/register.schema';

test.describe('POST: /register @Sb1a8822b', () => {
    test('successful register should return valid code @T3f162fe4', async ({ app: { api }, faker }) => {
        const response = await api.authController.register({
            isSubscribed: false,
            email: faker.internet.email(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            password: faker.internet.password()
        });
        expect((await response.json()).success).toBeTruthy();
    });

    test('successful register should match valid JSON schema @T64c6bb04', async ({ app: { api }, faker, ajv }) => {
        const response = await api.authController.register({
            isSubscribed: false,
            email: faker.internet.email(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            password: faker.internet.password()
        });

        const validate = ajv.compile(registerResponseSchema);
        const isValid = validate(await response.json());
        expect(isValid).toBe(true);
    });

    test('unsuccessful register with empty email should return 400 code @Tb4372716', async ({ app: { api }, faker }) => {
        const response = await api.authController.register({
            isSubscribed: false,
            email: '',
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            password: faker.internet.password()
        });
        expect(response.status()).toBe(400);
    });
});
