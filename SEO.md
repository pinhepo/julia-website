# Guia de SEO - Site Julia Goulart Psicóloga

## ✅ O que já está implementado

### 1. **Metadados otimizados** (`app/layout.tsx`)
- Título com palavra-chave local: "Psicóloga Clínica em Pelotas/RS"
- Descrição completa com serviços e localização
- Keywords relevantes para busca local
- Open Graph para redes sociais
- Twitter Cards

### 2. **Structured Data (JSON-LD)**
Schema.org implementado com:
- Tipo: `Psychologist`
- Endereço completo (Pelotas/RS)
- Coordenadas geográficas
- Horário de funcionamento
- Serviços oferecidos (TCC, Online)
- Links de redes sociais

### 3. **Arquivos SEO**
- ✅ `robots.txt` - Permite indexação
- ✅ `sitemap.xml` - Gerado automaticamente pelo Next.js
- ✅ URL canônica configurada

## 📝 Próximos passos após o deploy

### 1. **Google Search Console**
```
1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: juliagoulart.com.br
3. Verifique a propriedade (DNS ou HTML)
4. Envie o sitemap: juliagoulart.com.br/sitemap.xml
```

### 2. **Google Meu Negócio** (ESSENCIAL para SEO local)
```
1. Acesse: https://business.google.com
2. Crie perfil para "Julia Goulart - Psicóloga"
3. Categoria: Psicólogo
4. Endereço: Centro de Pelotas (se atender presencial)
5. Horários de atendimento
6. Fotos do consultório
7. Solicite avaliações de clientes
```

### 3. **Configurar Analytics**
```typescript
// Adicionar Google Analytics 4 no app/layout.tsx
// ou criar app/google-analytics.tsx
```

### 4. **Ajustes necessários antes do deploy**

#### No arquivo `app/layout.tsx`:
- [ ] Atualizar URL de `juliagoulart.com.br` para o domínio real
- [ ] Adicionar imagem OpenGraph (1200x630px)

#### No arquivo `public/robots.txt`:
- [ ] Atualizar URL do sitemap com domínio real

#### No arquivo `app/sitemap.ts`:
- [ ] Atualizar `baseUrl` com domínio real

#### No arquivo `app/components/ContactSection.tsx`:
- [ ] Atualizar o CRP da Julia Goulart

## 🎯 Palavras-chave principais

### Primárias (alta prioridade)
- psicóloga Pelotas
- psicóloga Pelotas RS
- TCC Pelotas
- terapia cognitivo comportamental Pelotas

### Secundárias
- psicóloga online
- atendimento psicológico Pelotas
- psicóloga ansiedade Pelotas
- psicóloga relacionamentos

### Long-tail
- "psicologa em pelotas rs que atende online"
- "terapia cognitivo comportamental pelotas centro"
- "psicóloga especializada em ansiedade pelotas"

## 📊 Ferramentas para monitorar SEO

1. **Google Search Console** - Desempenho nas buscas
2. **Google Analytics 4** - Tráfego e comportamento
3. **Google Meu Negócio Insights** - Visualizações locais
4. **PageSpeed Insights** - Performance do site

## 🚀 Dicas para melhorar o ranking local

### Criar conteúdo local
- Adicionar blog com artigos sobre psicologia
- Mencionar Pelotas/RS nos textos
- Criar página "Onde fica o consultório"

### Conseguir backlinks
- Parcerias com outros profissionais da saúde em Pelotas
- Diretórios de psicólogos (CRP-RS, etc)
- Artigos em sites locais de Pelotas

### Avaliações
- Pedir avaliações no Google Meu Negócio
- Responder todas as avaliações
- Manter nota alta (4.5+)

### Redes sociais
- Manter Instagram ativo (@julliagoulart.psi)
- Postar regularmente sobre TCC e saúde mental
- Usar hashtags locais: #pelotasRS #psicologiaPelotas

## 🔍 Como verificar se está indexado

Após 1-2 semanas do deploy, pesquise no Google:
```
site:juliagoulart.com.br
```

Se aparecer, está indexado! ✅

## 📱 Performance e Mobile

O site já está:
- ✅ Responsivo (mobile-first)
- ✅ Otimizado para velocidade
- ✅ Com fontes otimizadas (Google Fonts)
- ✅ Imagens otimizadas (Next.js Image)

## 📞 Ações recomendadas mensais

- [ ] Verificar posição no Google para palavras-chave
- [ ] Analisar origem do tráfego (orgânico, direto, social)
- [ ] Responder avaliações no Google Meu Negócio
- [ ] Atualizar conteúdo se necessário
- [ ] Postar no Instagram e Facebook

---

**Nota**: O SEO é um processo contínuo. Resultados significativos aparecem após 3-6 meses de trabalho consistente.

