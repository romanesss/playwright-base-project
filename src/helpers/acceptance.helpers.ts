import { Api } from '../api/api';
import { faker } from '@faker-js/faker';
import { RequestHolder } from '../api/requestHolder';
import { TestUser } from '../models/test-user.model';

export class AcceptanceHelpers extends RequestHolder {
    async generateRandomUser(): Promise<TestUser> {
        const api = new Api(this.request);
        const userEmail = faker.internet.email();
        const userFirstName = faker.person.firstName();
        const userLastName = faker.person.lastName();
        const userPassword = faker.internet.password();

        try {
            await api.authController.register({
                isSubscribed: false,
                email: userEmail,
                firstName: userFirstName,
                lastName: userLastName,
                password: userPassword
            });

            return {
                email: userEmail,
                password: userPassword
            };
        } catch (error) {
            console.error('Error while generating random user', error);
            throw error;
        }
    }
}
