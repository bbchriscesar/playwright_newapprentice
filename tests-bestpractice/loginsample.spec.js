// @ts-check
const { test, expect } = require('@playwright/test');

test('login page', async ({ page }) => {
    // launch URL
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    // check header title
    await expect(page).toHaveTitle(/LoginPage Practise | Rahul Shetty Academy/);

    // input username
    await page.locator('input#username').type('rahulshettyacademy');

    // input password
    await page.locator('input#password').type('learning');

    // click I agree
    await page.locator('input#terms').click();

    // click sign in
    await page.locator('input#signInBtn').click();

    // check header title once logged in
    await expect(page).toHaveTitle(/ProtoCommerce/);
});

test('login as a teacher', async ({ page }) => {
    // launch URL
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    // check header title
    await expect(page).toHaveTitle(/LoginPage Practise | Rahul Shetty Academy/);

    // input username
    await page.locator('input#username').type('rahulshettyacademy');

    // input password
    await page.locator('input#password').type('learning');

    // select teacher
    await page.locator('select').selectOption('teach');

    // click I agree
    await page.locator('input#terms').click();

    // click sign in
    await page.locator('input#signInBtn').click();

    // check header title once logged in
    await expect(page).toHaveTitle(/ProtoCommerce/);
});