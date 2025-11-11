# Configuração do Domínio - Checklist

## ✅ Status da Configuração

### 1. DNS no Hostinger
- [x] Tipo: CNAME
- [x] Nome: `juliagoulart.psi`
- [x] Destino: `cname.vercel-dns.com`
- [x] TTL: 14400

### 2. Domínio no Vercel
- [ ] Adicionar `juliagoulart.psi.umbrielcms.com.br` nas Settings → Domains
- [ ] Aguardar propagação (5-30 minutos)

### 3. URLs atualizadas no código
- [x] `robots.txt`
- [x] `sitemap.ts`
- [x] `layout.tsx` (OpenGraph)
- [x] `layout.tsx` (JSON-LD)

---

## 🔧 Próximos passos

### Passo 1: Commit e Push
```bash
git add .
git commit -m "Update URLs to custom domain"
git push
```

### Passo 2: Adicionar domínio no Vercel
1. Acesse: https://vercel.com/dashboard
2. Entre no projeto `julia-website`
3. Settings → Domains
4. Add Domain: `juliagoulart.psi.umbrielcms.com.br`

### Passo 3: Aguardar propagação DNS
```bash
# Verificar se o DNS está propagado (pode levar 5-30 min)
nslookup juliagoulart.psi.umbrielcms.com.br
```

Ou use: https://dnschecker.org/#CNAME/juliagoulart.psi.umbrielcms.com.br

### Passo 4: Testar o site
Quando o Vercel aprovar o domínio, acesse:
- https://juliagoulart.psi.umbrielcms.com.br
- https://juliagoulart.psi.umbrielcms.com.br/sitemap.xml
- https://juliagoulart.psi.umbrielcms.com.br/robots.txt

---

## 🔍 Google Search Console (DEPOIS do domínio funcionar)

### Método 1: DNS/TXT (RECOMENDADO agora!)
1. Adicionar propriedade como **"Domínio"**
2. Google vai dar um TXT record tipo: `google-site-verification=XXXXX`
3. No Hostinger, adicionar registro TXT:
   - Tipo: TXT
   - Nome: `@` ou `juliagoulart.psi` (depende se quer verificar o root ou subdomínio)
   - Conteúdo: `google-site-verification=XXXXX`
4. Aguardar e clicar em Verificar

### Método 2: URL Prefix com arquivo HTML (alternativa)
Se preferir, ainda pode usar o método do arquivo HTML que expliquei antes.

---

## 🎯 Quando migrar para juliagoulart.psi.com.br

Quando comprar o domínio final:

1. **No Hostinger**: Apontar DNS do novo domínio
   - Tipo: CNAME
   - Nome: `@` ou `www`
   - Destino: `cname.vercel-dns.com`

2. **No Vercel**: Adicionar novo domínio

3. **Atualizar código** (eu faço isso pra você!)

4. **Google Search Console**: 
   - Adicionar nova propriedade
   - Configurar redirecionamento 301 da URL antiga

---

## 📊 Checklist Pós-Deploy

Depois que tudo funcionar:

- [ ] Site abre em https://juliagoulart.psi.umbrielcms.com.br
- [ ] Certificado SSL ativo (cadeado verde)
- [ ] Sitemap acessível
- [ ] Robots.txt acessível
- [ ] Google Search Console verificado
- [ ] Sitemap enviado no Search Console
- [ ] Google Meu Negócio criado

---

## 🆘 Troubleshooting

### DNS não propaga
- Aguarde até 48h (geralmente 5-30 min)
- Limpe cache DNS: `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

### Vercel não aceita o domínio
- Verifique se o CNAME está correto: `cname.vercel-dns.com`
- Verifique se está sem `http://` ou `https://`

### Site não carrega (ERR_SSL)
- Aguarde o Vercel provisionar o certificado SSL (automático, leva alguns minutos)

---

**Última atualização**: Código preparado para `juliagoulart.psi.umbrielcms.com.br`

