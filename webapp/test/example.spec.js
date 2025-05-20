const { test, expect } = require('@playwright/test');

test('basic first', async ({ page }) => {
    // Ir a pagina
    await page.goto(`https://playwright.dev/`);
    // Usar un selector para obtener un elemento
    const title = page.locator(`.navbar__inner .navbar__title`);
    // Evaluar si el contenido del texto es 'Playwright'
    await expect(title).toHaveText('Playwright');
});