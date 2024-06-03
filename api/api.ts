import { AuthController } from './auth.controller';
import { RequestHolder } from './requestHolder';

export class Api extends RequestHolder {
    public readonly auth = new AuthController(this.request);
}
