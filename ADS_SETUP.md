# Guia rápido de configuração do Google AdSense para este projeto

Este arquivo centraliza as informações necessárias para configurar o AdSense neste site. Copie e cole os valores no código e siga os passos.

---

## 1) Campos e o que significam

- `ca-pub-XXXXXXXXXXXXXXX` (Publisher ID)
  - Identificador da sua conta AdSense (ex.: `ca-pub-9890571230448286`). Deve ser usado no `data-ad-client` do script e do `ins`.

- `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" data-ad-client="ca-pub-..."></script>`
  - Script global do AdSense. Deve ser incluído uma vez no `<head>` de cada página (ou num layout compartilhado) antes de solicitar blocos.

- `<ins class="adsbygoogle" ...>`
  - Contêiner do anúncio onde o AdSense renderiza o bloco.

- `data-ad-client` (no `<ins>`)
  - Novamente o Publisher ID; vincula o anúncio à sua conta.

- `data-ad-slot`
  - ID da unidade de anúncio (Ad Unit ID). É criado no painel do AdSense para cada bloco. Substitua `REPLACE_WITH_AD_SLOT` por esse número.

- `data-ad-format` (ex: `auto`)
  - Define o formato do anúncio. Use `auto` para anúncios responsivos que se adaptam ao espaço.

- `data-full-width-responsive` (ex: `true`)
  - Quando `true`, ajuda o anúncio a ocupar largura total em dispositivos menores (útil para responsivos).

- `(adsbygoogle = window.adsbygoogle || []).push({});`
  - Código que inicializa o pedido de anúncio para o contêiner `<ins>`.

---

## 2) Como criar um ad-slot (unidade de anúncio) no AdSense

1. Acesse https://www.google.com/adsense/ e faça login com sua conta.
2. No menu, vá em 'Anúncios' → 'Unidades de anúncios' (ou 'By ad unit') → 'Criar unidade de anúncios'.
3. Escolha o tipo (recomendado: "Responsivo - In-Page") e configure nome, tamanhos (ou deixe responsivo).
4. Salve. O AdSense fornecerá um snippet de código; copie o valor `data-ad-slot` (geralmente um número longo) do snippet.

Exemplo do snippet que o AdSense gera:

```html
<!-- Exemplo fornecido pelo painel (apenas para referência) -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9890571230448286"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

Use o `data-ad-slot` real no lugar de `1234567890`.

---

## 3) Onde substituir os placeholders neste projeto

- Local do script global (ex.: `index.html` e demais páginas):

```html
<!-- substitua ca-pub-REPLACE_BY_YOUR_ID pelo seu Publisher ID -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" data-ad-client="ca-pub-9890571230448286"></script>
```

- Local do bloco de anúncio (ex.: logo abaixo do header):

```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9890571230448286"
     data-ad-slot="REPLACE_WITH_AD_SLOT"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

Substitua `REPLACE_WITH_AD_SLOT` pelo número do `data-ad-slot` criado no painel AdSense.

> Observação: neste repositório já existe um `data-ad-client` nas páginas com o Publisher ID `ca-pub-9890571230448286`. Caso seja esse o seu ID, apenas substitua os `data-ad-slot`.

---

## 4) Recomendações de posicionamento

- Inclua o script global no `<head>` de todas as páginas ou num arquivo comum que é carregado por elas.
- Insira blocos `<ins>` dentro do `<body>`, preferencialmente:
  - Logo abaixo do header (remuneração média boa e visível)
  - No final dos artigos (artigo1.html, etc.)
  - Em páginas de conteúdo (imc.html, tmb.html) posicione entre o header e o conteúdo principal
- Evite colocar blocos dentro de `<head>` ou dentro de `<style>` (HTML inválido e causa erros).

---

## 5) Testes e validação

- Localmente você pode ver o contêiner do anúncio, mas anúncios reais geralmente só aparecem após a verificação/ativação da sua conta no AdSense.
- Veja o console do navegador para mensagens do AdSense; erros de domínio não autorizado ou bloqueios aparecem lá.
- Depois de fazer `git push` e o deploy no Vercel (se integrado), aguarde a propagação do AdSense — pode levar alguns minutos a horas.

---

## 6) Considerações para o Vercel

- Certifique-se de que `vercel.json` inclui `assets/**` e as páginas HTML para que os arquivos sejam servidos corretamente (isso já foi atualizado no projeto).
- Deploy: Commit → push → Vercel faz o deploy automático (se estiver conectado ao repo). Monitore o log do deploy se houver problemas.

---

## 7) Políticas e privacidade

- Verifique as políticas do Google AdSense para garantir conformidade com conteúdo e posicionamento.
- Adicione uma nota de privacidade / Política de Cookies se você exibir anúncios personalizados; atualize `politica.html` se necessário.

---

## 8) Checklist antes do deploy

- [ ] Criou uma conta AdSense e vinculou o domínio.
- [ ] Copiou o `ca-pub-...` correto para `data-ad-client` no script (head).
- [ ] Criou as unidades de anúncio e copiou cada `data-ad-slot` para os blocos `<ins>` no HTML.
- [ ] Commit + push das alterações.
- [ ] Aguardou deploy e conferiu console do navegador e logs do Vercel.

---

## 9) Suporte rápido (onde colar o ID)

- Substitua `REPLACE_WITH_AD_SLOT` no(s) arquivo(s):
  - `index.html`
  - `imc.html`
  - `tmb.html`
  - `sobre.html`
  - `contato.html`
  - `politica.html`
  - `artigos/*.html`

- Use seu `ca-pub-XXXXXXXXX` no `data-ad-client` (já presente nas páginas se for o mesmo ID).

---

Se quiser, eu posso:
- Substituir automaticamente `REPLACE_WITH_AD_SLOT` por um número de ad-slot que você fornecer.
- Fazer o commit e o push dessas alterações no repositório.
- Adicionar um pequeno trecho no `politica.html` sobre anúncios e privacidade.

Diga o que prefere e eu faço a próxima alteração.