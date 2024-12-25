import { PageHolder } from './base/pageHolder';
import { Login } from './pages/login.page';
import { Inventory } from './pages/shop.page';
import { APIHelpers } from '../helpers/api.helpers';

export class Application extends PageHolder {
    public api = new APIHelpers(this.page.request);
    
    public loginPage = new Login(this.page);
    public shopPage = new Inventory(this.page);

    async headlessLogin(data: { email: string; password: string }) {
        const token = (await this.api.login(data)).token;
        await this.page.goto('/', { waitUntil: 'commit' });
        await this.page.evaluate(_token => window.localStorage.setItem('token', _token), token);
    }
}
