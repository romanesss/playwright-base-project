export default class Credentials {
    private static accountInfo = {
        standard: {
            email: 'romanes_test@gmail.com',
            password: 'romanes_test@gmail.com'
        }
    };

    public static getUserCredentials(accountType: 'standard'): { email: string; password: string } {
        return this.accountInfo[accountType];
    }
}
