;

import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/hemsida_material/contact.html');
  await page.getByPlaceholder('Name').click();
  await expect(page.getByPlaceholder('Name')).toBeVisible();
  await expect(page.getByRole('button', { name: 'SEND' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'SEND' })).not.toBeHidden();
});

h'