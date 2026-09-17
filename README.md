# 🌍 Elisa — Terra360 HtmlTerra

> **Elisa30Creative = Terra360** — projeto unificado de demonstração e desenvolvimento web.

Este repositório é a base de publicação do projeto da **elisa30creative**. Os arquivos públicos do site devem ser colocados na pasta `public/`.

## Requisitos

- Node.js 18.17 ou superior (necessário para Next.js 14)
- npm 9+ ou yarn

## Início rápido

```bash
git clone https://github.com/elisa30creative/Elisa.git
cd Elisa
npm install
cp .env.example .env.local
npm run dev
```

Acesse <http://localhost:3000>.

## Build de produção

```bash
npm run build
npm start
```

## Publicação de arquivos

A pasta `public/` é a pasta pública do Next.js. Organize os arquivos por tipo:

```text
public/
├── images/       # imagens
├── documents/    # PDFs e documentos
├── fonts/        # fontes locais
└── favicon.ico   # ícone do site
```

Os arquivos são acessados sem o prefixo `public/`:

```text
public/images/logo.png  →  /images/logo.png
public/documents/guia.pdf  →  /documents/guia.pdf
```

Para publicar alterações:

```bash
git add public/
git commit -m "publica novos arquivos do projeto"
git push origin main
```

Se o repositório estiver conectado à Vercel, o push para `main` inicia automaticamente um novo deploy.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha os valores necessários. Arquivos `.env*` locais não são publicados pelo Git.

## Comandos disponíveis

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm start` — servidor de produção
- `npm run lint` — verificação de código

## Links

- Repositório: <https://github.com/elisa30creative/Elisa>
- Site: <https://elisa-lac.vercel.app>
