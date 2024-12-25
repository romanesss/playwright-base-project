import { RequestHolder } from './requestHolder';
import playwrightConfig from '../../playwright.config';
import type { RegisterRequest } from '../models/auth.models';
import { APIResponse } from '@playwright/test';

export class AuthController extends RequestHolder {
    public loginRoute = '/api/auth/login';
    public registerRoute = '/api/auth/register';

    async login(data: { email: string; password: string }): Promise<APIResponse> {
        return await this.request.post(playwrightConfig.use?.baseURL + this.loginRoute, {
            data
        });

        /**
         * @note It's better to return the json object, if you don't need to check response.status().
         * @example return loginResponse.json() as Promise<LoginResponse>;
         */
    }

    async register(data: RegisterRequest): Promise<APIResponse> {
        return await this.request.post(playwrightConfig.use?.baseURL + this.registerRoute, {
            data
        });
    }
}
