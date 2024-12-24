import { RequestHolder } from './requestHolder';
import playwrightConfig from '../../playwright.config';
import type { LoginResponse } from '../models/auth.interfaces';

export class APIHelpers extends RequestHolder {
    public loginRoute = '/api/auth/login';

    async login(data: { email: string; password: string }): Promise<LoginResponse> {
        const loginResponse = await this.request.post(playwrightConfig.use?.baseURL + this.loginRoute, {
            data
        });

        return loginResponse.json() as Promise<LoginResponse>;
    }
}
