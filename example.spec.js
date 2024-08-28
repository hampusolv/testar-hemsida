import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/inance-html%202/about.html');
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await expect(page.getByRole('link', { name: 'Home (current)' })).toBeVisible();
});