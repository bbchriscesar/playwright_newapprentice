const { test, expect } = require('@playwright/test');

test.only('end to end automation', async({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

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

    // click iPhone
    await page.locator('app-card:nth-child(1) > div > div.card-body > h4 > a').click();

    // input name
    await page.locator('input.form-control[name="name"]').type('Selena Gomez');

    // input email
    await page.locator('input.form-control[name="email"]').type('selenagomez@sampleemail.com');

    // input password
    await page.locator('input#exampleInputPassword1').type('thisismybestpassword')

    // click check box
    await page.locator('input.form-check-input[id="exampleCheck1"]').click();

    // select female
    await page.locator('select#exampleFormControlSelect1').selectOption({ label: 'Female' });

    // input birthday
    await page.locator('input.form-control[name="bday"]').fill('1982-12-18')

    // click submit
    await page.locator('input.btn[type="submit"]').click();

    // verify alert message
    const alertMessage = page.locator('div.alert');
    await expect(alertMessage).toContainText('The Form has been submitted successfully!');
});