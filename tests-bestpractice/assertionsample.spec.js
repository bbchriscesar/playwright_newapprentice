const { test, expect } = require('@playwright/test');

test('login with assertion', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const username_label = page.getByLabel('Username:');
    await expect(username_label).toBeVisible();

    const username_input = page.locator('input#username');
    await expect(username_input).toBeVisible();

    const password_label = page.getByLabel('Password:');
    await expect(password_label).toBeVisible();

    const iAgreeTo = page.locator('.text-white.termsText');
    await expect(iAgreeTo).toContainText('I Agree to the');
});