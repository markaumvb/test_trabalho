import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pt.anotepad.com/');
  await page.getByRole('textbox', { name: 'Título da Nota' }).click();
  await page.getByRole('textbox', { name: 'Título da Nota' }).fill('Entrega trabalho TEST DAS 2026');
  await page.getByRole('textbox', { name: 'Conteúdo da Nota' }).click();
  await page.getByRole('textbox', { name: 'Conteúdo da Nota' }).fill('Fabio Antonio Gabriel\nMarcus Vinicius Bertoncello');
});