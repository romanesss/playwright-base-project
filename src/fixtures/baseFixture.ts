import { test as base } from '@playwright/test';
import { GitHubApiHelpers } from '../helpers/github.api.helpers';
import { Application } from '../app/application';

type MyFixtures = {
    app: Application;
    gitHubApiHelpers: GitHubApiHelpers;

};

export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        await use(new Application(page));
    },
    gitHubApiHelpers: async ({ request }, use) => {
        await use(new GitHubApiHelpers(request));
    }
});

export { expect } from '@playwright/test';
