import { BasePage } from '../base/basePage';
import { ErrorNotification } from '../components/error-notification.component';
export class Register extends BasePage {
    public url = '/register';

    public emailInput = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email');
    public inputWarning = this.page.locator('.invalid-message');
    public emailInputWarning = this.emailInput.locator('../..').locator(this.inputWarning);
    public firstNameInput = this.page.getByPlaceholder('Please Enter Your First Name');
    public lastNameInput = this.page.getByPlaceholder('Please Enter Your Last Name');
    public passwordInput = this.page.getByPlaceholder('Please Enter Your Password');
    public passwordInputWarning = this.passwordInput.locator('../..').locator(this.inputWarning);
    public signUpBtn = this.page.getByRole('button', { name: 'Sign Up' });

    public errorNotification = new ErrorNotification(this.page);

    async register(credentials: { email: string; firstName: string; lastName: string; password: string }): Promise<void> {
        await this.emailInput.fill(credentials.email);
        await this.firstNameInput.fill(credentials.firstName);
        await this.lastNameInput.fill(credentials.lastName);
        await this.passwordInput.fill(credentials.password);
        await this.signUpBtn.click();
    }
}
