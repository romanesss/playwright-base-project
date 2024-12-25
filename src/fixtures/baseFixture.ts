import Ajv from 'ajv';
import { faker } from '@faker-js/faker';
import { test as base } from '@playwright/test';
import { Application } from '../app/application';
import { GitHubApiHelpers } from '../helpers/github.api.helpers';
import { AcceptanceHelpers } from '../helpers/acceptance.helpers';

type MyFixtures = {
    app: Application;
    gitHubApiHelpers: GitHubApiHelpers;
    acceptanceHelpers: AcceptanceHelpers;
    faker: typeof faker;
    ajv: Ajv;
};

export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        await use(new Application(page));
    },
    gitHubApiHelpers: async ({ request }, use) => {
        await use(new GitHubApiHelpers(request));
    },
    acceptanceHelpers: async ({ request }, use) => {
        await use(new AcceptanceHelpers(request));
    },
    faker: async ({}, use) => {
        await use(faker);
    },
    ajv: async ({}, use) => {
        const ajv = new Ajv();
        await use(ajv);
    }
});

export { expect } from '@playwright/test';
