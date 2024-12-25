import { BasePage } from '../base/basePage';
import { Header } from '../components/header.component';

export class Inventory extends BasePage {
    public url = '/shop';
    public header = new Header(this.page);
}
