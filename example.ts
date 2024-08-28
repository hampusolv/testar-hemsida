import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Carvilla%20Free%20Website%20Template%20-%20Free-CSS.com/carvilla-v1.0/index.html');
  await page.getByText('Nemo enim ipsam voluptatem').first().click();
  await page.getByText('Nemo enim ipsam voluptatem').nth(1).click();
  await page.getByText('Nemo enim ipsam voluptatem').nth(2).click();
});
// hej jag heter Hampus
