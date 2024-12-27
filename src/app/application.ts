import { PageHolder } from './base/pageHolder';
import { Login } from './pages/login.page';
import { Inventory } from './pages/shop.page';
import { Register } from './pages/register.page';
import { Dashboard } from './pages/dashboard.page';
import { Api } from '../api/api';

export class Application extends PageHolder {
    public api = new Api(this.page.request);

    public loginPage = new Login(this.page);
    public shopPage = new Inventory(this.page);
    public registerPage = new Register(this.page);
    public dashboardPage = new Dashboard(this.page);

    async headlessLogin(data: { email: string; password: string }) {
        const token = (await (await this.api.authController.login(data)).json()).token;
        await this.page.goto('/', { waitUntil: 'commit' });
        await this.page.evaluate(_token => window.localStorage.setItem('token', _token), token);
    }
}
