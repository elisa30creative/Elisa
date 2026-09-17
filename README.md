# 🌍 Elisa — Terra360 HtmlTerra

> **Elisa30Creative = Terra360** — projeto unificado de demonstração e desenvolvimento web.

Este repositório é a base de publicação do projeto da **elisa30creative**. Os arquivos públicos do site devem ser colocados na pasta `public/`.

## 🚀 Início rápido

### Pré-requisitos

- Node.js 16 ou superior
- npm ou yarn

### Instalação

```bash
git clone https://github.com/elisa30creative/Elisa.git
cd Elisa
npm install
cp .env.example .env.local
```

### Desenvolvimento local

```bash
npm run dev
```

Acesse <http://localhost:3000>.

### Build de produção

```bash
npm run build
npm start
```

## 📂 Publicação de arquivos

A pasta `public/` é a pasta pública principal do projeto Next.js:

```text
public/
├── images/       # imagens
├── documents/    # PDFs e outros documentos
├── favicon.ico   # ícone do site
└── ...           # demais arquivos públicos
```

Qualquer arquivo colocado em `public/` pode ser acessado diretamente pela URL, sem o prefixo `public/`:

```text
public/images/logo.png  →  /images/logo.png
public/documents/guia.pdf  →  /documents/guia.pdf
```

Depois de adicionar ou alterar arquivos, publique as alterações com:

```bash
git add public/
git commit -m "publica novos arquivos do projeto"
git push origin main
```

Se o projeto estiver conectado à Vercel, o `push` para `main` iniciará automaticamente um novo deploy.

## 🔐 Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha os valores necessários. Arquivos `.env*` locais não são publicados pelo Git.

## 🧰 Comandos disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — cria a build de produção
- `npm start` — inicia a aplicação em produção
- `npm run lint` — verifica o código

## 🔗 Links

- Repositório: <https://github.com/elisa30creative/Elisa>
- Site: <https://elisa-lac.vercel.app>
