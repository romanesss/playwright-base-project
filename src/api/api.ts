import { RequestHolder } from './requestHolder';
import { AuthController } from './auth.controller';

export class Api extends RequestHolder {
    public authController = new AuthController(this.request);
}
