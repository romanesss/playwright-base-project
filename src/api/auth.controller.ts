import { RequestHolder } from './requestHolder';
import playwrightConfig from '../../playwright.config';
import type { RegisterRequest } from '../models/auth.models';
import { APIResponse } from '@playwright/test';

export class AuthController extends RequestHolder {
    public loginRoute = '/api/auth/login';
    public registerRoute = '/api/auth/register';

    async login(data: { email: string; password: string }): Promise<APIResponse> {
        const res = await this.request.post(playwrightConfig.use?.baseURL + this.loginRoute, {
            data
        });

        return res;
    }

    async register(data: RegisterRequest): Promise<APIResponse> {
        const res = await this.request.post(playwrightConfig.use?.baseURL + this.registerRoute, {
            data
        });

        return res;
    }
}
