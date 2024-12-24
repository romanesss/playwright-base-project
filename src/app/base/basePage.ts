import { PageHolder } from './pageHolder';

export abstract class BasePage extends PageHolder {
    public abstract url: string;

    public async open(): Promise<void> {
        await this.page.goto(this.url);
    }
}
