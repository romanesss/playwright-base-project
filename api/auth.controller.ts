import { RequestHolder } from './requestHolder';
import playwrightConfig from '../playwright.config';
// import type { LoginResponse, UserCreateRequest, UserCreatedResponse } from './models';
import type { LoginResponse } from './models/auth.interfaces';

export class AuthController extends RequestHolder {
    async login(data: { email: string; password: string }): Promise<LoginResponse> {
        const loginResponse = await this.request.post(playwrightConfig.use?.baseURL + '/api/auth/login', {
            data
        });

        return loginResponse.json() as Promise<LoginResponse>;
    }
}
