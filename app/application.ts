import { PageHolder } from './pageHolder';
import { Login } from './pages/login.page';
import { Inventory } from './pages/shop.page';
import { Api } from '../api/api';

export class Application extends PageHolder {
    public api = new Api(this.page.request);

    public loginPage = new Login(this.page);
    public shopPage = new Inventory(this.page);

    async authorization(data: { email: string; password: string }) {
        const token = (await this.api.auth.login(data)).token;
        await this.page.goto('/', { waitUntil: 'commit' });
        await this.page.evaluate(_token => window.localStorage.setItem('token', _token), token);
    }
}
