import { BaseComponent } from '../base/baseComponent';

export class ErrorNotification extends BaseComponent {
    public title = this.page.locator('.notification-title');
    public message = this.page.locator('.notification-message');
    public dismissBtn = this.page.locator('.notification-dismiss');
}
