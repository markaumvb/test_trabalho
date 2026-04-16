import { firefox } from 'playwright';

(async () => {
  const browser = await firefox.launch({
    headless: false, 
  });

  const context = await browser.newContext({
 // contextos configurar cookie essas coisas...
  });

  const page = await context.newPage();

  await page.goto('https://pt.anotepad.com/', { waitUntil: 'domcontentloaded' }); 

  // preenche direto, sem .click() separado
  await page.getByRole('textbox', { name: 'Título da Nota' }).fill('Entrega trabalho TEST DAS 2025');
  await page.getByRole('textbox', { name: 'Conteúdo da Nota' }).fill('Fabio Antonio Gabriel\nMarcus Vinicius Bertoncello');
  await page.getByRole('textbox', { name: 'Título da Nota' }).highlight();

  //console.log('rodou!');
})();

///para rodar o teste: npx playwright test (testa nos navegadores configurados no playwright.config.ts, sem abrir o navegador, e gera um relatório html)
// para rodar o arquivo de index: npx tsx index.ts (abre o navegador e preenche os campos)
//REPOSITÓRIO GITHUB https://github.com/markaumvb/test_trabalho <<< repositório com arquivos de configuração e teste!!!
