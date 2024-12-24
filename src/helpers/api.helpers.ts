import type { LoginResponse } from '../models/auth.interfaces';
import { RequestHolder } from '../app/base/requestHolder';
import playwrightConfig from '../../playwright.config';

export class APIHelpers extends RequestHolder {
    public loginUrl: string = '/api/auth/login';

    async login(data: { email: string; password: string }): Promise<LoginResponse> {
        const loginResponse = await this.request.post(playwrightConfig.use?.baseURL + this.loginUrl, {
            data
        });
        return loginResponse.json() as Promise<LoginResponse>;
    }
}
