import { BasePage } from '../basePage';

export class Login extends BasePage {
    public pagePath = '/login';

    private emailInput = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email');
    private passwordInput = this.page.getByPlaceholder('Please Enter Your Password')
    private loginBtn = this.page.getByRole('button', { name: 'Login' });

    async login(credentials: { email: string; password: string }) {
        await this.emailInput.fill(credentials.email);
        await this.passwordInput.fill(credentials.password);
        await this.loginBtn.click();
    }
}
