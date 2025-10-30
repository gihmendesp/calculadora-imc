# Leve IMC — Deploy no Vercel

Este é um site estático (HTML/CSS/JS). O projeto já está preparado para ser implantado no Vercel sem etapa de build adicional.

Opções de deploy:

- Usando o Vercel CLI (recomendado para desenvolvedores):

  1. Instale o CLI (se ainda não tiver):
     ```powershell
     npm i -g vercel
     ```

  2. Faça login:
     ```powershell
     vercel login
     ```

  3. No diretório do projeto (`c:\Users\Gisele\Desktop\IMC`), rode:
     ```powershell
     vercel
     ```

  O comando irá guiar você e implantar o site como um projeto estático.

- Usando a interface web do Vercel:

  1. Acesse https://vercel.com/dashboard
  2. Clique em "New Project" → "Import Project" → escolha o repositório (se estiver no GitHub/GitLab/Bitbucket) ou conecte manualmente.
  3. O Vercel deve detectar automaticamente que é um site estático. Se necessário, não defina comando de build e aponte o diretório raiz para `.`.

Observações:

- O arquivo `vercel.json` (adicionado) instrui o Vercel a servir os arquivos estáticos e mapeia a raiz `/` para `index.html`.
- Dependências externas (ex.: Chart.js) são carregadas via CDN e não requerem instalação.
- Se quiser um fluxo de desenvolvimento local, eu posso adicionar um `package.json` com um script de `serve`.

Se quiser, eu também posso:

- Adicionar Open Graph meta tags no `index.html`.
- Criar um `package.json` com scripts úteis (serve, lint).
- Configurar headers/policies adicionais em `vercel.json`.
