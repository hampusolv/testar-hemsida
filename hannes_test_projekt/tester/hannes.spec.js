import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/hemsida_material/contact.html');
  await page.getByPlaceholder('Name').click();
  await expect(page.getByPlaceholder('Name')).toBeVisible();
  await expect(page.getByRole('button', { name: 'SEND' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'SEND' })).not.toBeHidden();
});

test('test2', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/inance-html%202/about.html');
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await expect(page.getByRole('link', { name: 'Home (current)' })).toBeVisible();
});

test('test3', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/hemsida_material/contact.html');
  await page.getByPlaceholder('Name').click();
  await expect(page.getByPlaceholder('Name')).toBeEditable();
  await page.getByRole('button', { name: 'SEND' }).click();
  await expect(page.getByRole('button', { name: 'SEND' })).toBeEnabled();
});



test('test4', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/hemsida_material/contact.html');
  await page.getByRole('heading', { name: 'Follow Us' }).click();
  await expect(page.getByRole('heading', { name: 'Follow Us' })).toBeInViewport({ratio:0.5});
  await expect(page.getByRole('heading', { name: 'Contact Us' })).not.toBeInViewport();
});


test('test5', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/hemsida_material/contact.html');
  await page.getByRole('link', { name: 'Services' }).click();
  const righttext=page.locator('div').filter({ hasText: 'Our Services' }).nth(1);
  await expect(righttext).toContainText(' Our Services ')
  await expect(righttext).not.toContainText(' something else  ')
});
