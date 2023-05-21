// @ts-check
const { test, expect } = require('@playwright/test');

test('login page sample 1', async ({ page }) => {
    // launch URL
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    // check header title
    await expect(page).toHaveTitle(/LoginPage Practise | Rahul Shetty Academy/);

    // input username
    const username_field = page.locator('input#username');
    await username_field.type('rahulshettyacademy');

    // input password
    const password_field = page.locator('input#password');
    await password_field.type('learning')

    // click I agree
    const iAgreeBtn = page.locator('input#terms');
    await iAgreeBtn.click();

    // click sign in
    const signInBtn = page.locator('input#signInBtn');
    await signInBtn.click();

    // check header title once logged in
    await expect(page).toHaveTitle(/ProtoCommerce/);
});