import { BasePage } from '../base/basePage';

export class Login extends BasePage {
    public url = '/login';

    public emailInput = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email');
    public passwordInput = this.page.getByPlaceholder('Please Enter Your Password');
    public loginBtn = this.page.getByRole('button', { name: 'Login' });

    async login(credentials: { email: string; password: string }) {
        await this.emailInput.fill(credentials.email);
        await this.passwordInput.fill(credentials.password);
        await this.loginBtn.click();
    }
}
