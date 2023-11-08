/**
 * go to /ahlviken57.stage.br24.se
 * click Nyheter link
 * click Styrelse link
 * click Aktiviteter link
 * click Mäklare link
 */

const { test, expect } = require('@playwright/test');
test('menu', async ({ page }) => {
    await page.goto('https://ahlviken57.stage.br24.se/');
    await page.getByRole('link', { name: 'Nyheter', exact: true }).click();
    await page.getByRole('link', { name: 'Styrelse', exact: true }).click();
    await page.getByRole('link', { name: 'Aktiviteter' }).click();
    await page.getByRole('link', { name: 'Mäklare' }).click();
});
