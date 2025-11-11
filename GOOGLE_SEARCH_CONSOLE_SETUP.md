# Como configurar Google Search Console - Passo a passo

## 📍 Seu site está em: https://julia-website-eight.vercel.app

---

## Passo 1: Acessar o Google Search Console

1. Acesse: **https://search.google.com/search-console**
2. Faça login com sua conta Google (ou da Julia)

---

## Passo 2: Adicionar propriedade

1. Clique em **"Adicionar propriedade"** ou **"Add property"**
2. Você verá duas opções:
   - **Domínio** (Domain)
   - **Prefixo do URL** (URL prefix) ← **ESCOLHA ESTA**

3. Cole a URL: `https://julia-website-eight.vercel.app`
4. Clique em **"Continuar"** ou **"Continue"**

---

## Passo 3: Verificar propriedade

O Google vai te dar várias opções de verificação. **A MAIS FÁCIL para Vercel é o arquivo HTML:**

### Opção 1: Arquivo HTML (RECOMENDADO para Vercel)

1. O Google vai te dar um arquivo tipo: `googleXXXXXXXXX.html`
2. Baixe esse arquivo
3. Coloque ele na pasta `public/` do projeto
4. Faça commit e push para o GitHub (o Vercel vai fazer deploy automático)
5. Aguarde 1-2 minutos para o deploy completar
6. Volte ao Google Search Console e clique em **"Verificar"**

**Como adicionar o arquivo:**
```bash
# Na pasta do projeto
cd /home/mateus/projects/julia-website
# O arquivo vai estar em public/googleXXXXXXXXX.html
git add public/googleXXXXXXXXX.html
git commit -m "Add Google Search Console verification file"
git push
```

### Opção 2: Meta tag HTML (ALTERNATIVA)

1. O Google vai te dar uma meta tag tipo:
```html
<meta name="google-site-verification" content="XXXXXXXXXXXX" />
```

2. **Se escolher esta opção, me avise que eu adiciono no código!**

---

## Passo 4: Enviar o Sitemap (DEPOIS de verificar)

Após a verificação ser aprovada:

1. No menu lateral, clique em **"Sitemaps"** ou **"Índice" → "Sitemaps"**
2. No campo **"Adicionar um novo sitemap"**, digite:
   ```
   sitemap.xml
   ```
   (apenas isso, sem URL completa)
3. Clique em **"Enviar"** ou **"Submit"**

✅ **Pronto!** O Google vai começar a indexar seu site.

---

## 🔍 Verificando se funcionou

### Verificar se o sitemap está funcionando
Acesse no navegador: https://julia-website-eight.vercel.app/sitemap.xml

Você deve ver um XML com:
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://julia-website-eight.vercel.app</loc>
    <lastmod>2024-XX-XX</lastmod>
    <changeFrequency>monthly</changeFrequency>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Verificar se o robots.txt está funcionando
Acesse no navegador: https://julia-website-eight.vercel.app/robots.txt

Você deve ver:
```
# Allow all search engines
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://julia-website-eight.vercel.app/sitemap.xml
```

---

## ⏱️ Quanto tempo leva?

- **Verificação**: Instantâneo (se o arquivo estiver correto)
- **Sitemap processado**: 1-3 dias
- **Primeiras páginas indexadas**: 3-7 dias
- **Aparecer no Google**: 1-4 semanas

---

## 🎯 Próximos passos após enviar o sitemap

### 1. Verificar indexação (após 1 semana)
Pesquise no Google:
```
site:julia-website-eight.vercel.app
```
Se aparecer resultado, está indexado! ✅

### 2. Google Meu Negócio (MUITO IMPORTANTE!)
Para SEO local em Pelotas:
1. Acesse: https://business.google.com
2. Crie perfil: "Julia Goulart - Psicóloga"
3. Categoria: **Psicólogo**
4. Endereço: Pelotas, RS (se atender presencial)
5. Adicionar fotos, horários, etc.

**Isso faz MUITA diferença para aparecer em "psicóloga perto de mim"!**

### 3. Quando comprar o domínio próprio
Quando migrar de `julia-website-eight.vercel.app` para `juliagoulart.com.br`:

1. Adicione a nova propriedade no Search Console
2. Verifique novamente
3. Envie o sitemap novamente
4. Configure redirecionamento 301 da URL antiga → nova

---

## 📊 Ferramentas do Search Console úteis

Depois de verificado, explore:
- **Desempenho**: Ver quais palavras-chave trazem visitas
- **Cobertura**: Ver se há erros de indexação
- **Experiência**: Ver velocidade e usabilidade mobile
- **Solicitação de indexação**: Forçar indexação de páginas específicas

---

## ❓ Problemas comuns

### "Não foi possível verificar"
- Aguarde 1-2 minutos após o deploy do Vercel
- Limpe o cache do navegador (Ctrl+Shift+R)
- Confirme que o arquivo está em `public/` e não em outra pasta

### "Sitemap não pode ser lido"
- Aguarde alguns minutos e tente novamente
- Verifique se https://julia-website-eight.vercel.app/sitemap.xml abre no navegador

### "Sitemap enviado mas não processado"
- Normal! Pode levar até 3 dias para o Google processar

---

## 🆘 Precisa de ajuda?

Me avise se:
- Preferir usar a verificação por meta tag (eu adiciono no código)
- Tiver algum erro na verificação
- Quiser adicionar Google Analytics também

**Boa sorte! 🚀**

