# E-Commerce Store

Este projeto é uma aplicação full-stack de e-commerce com funcionalidades de front-end e integração com uma API de administração. Ele usa tecnologias modernas como Next.js 14, React, Tailwind, Prisma e PostgreSQL para fornecer uma experiência completa e escalável de loja online.

## Recursos Principais

- Loja online com suporte para múltiplos produtos, categorias e filtros.
- Funcionalidade de carrinho de compras.
- Integração com o Stripe para processamento de pagamentos.
- Interface moderna e responsiva utilizando Tailwind CSS.
- Sistema de gestão de vitrines (Billboards), permitindo customização de banners por categoria.
- Autenticação usando Clerk.

## Dependências

Este repositório depende da aplicação [ecommerce-admin](https://github.com/Humberto08/ecommerce-admin), que gerencia a API de backend e o CMS.

## Tecnologias Utilizadas

- **Next.js 14**: Para o roteamento e renderização do front-end.
- **React**: Biblioteca de componentes de UI.
- **Tailwind CSS**: Framework para estilização rápida e responsiva.
- **Prisma**: ORM para interações com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Stripe**: Plataforma de pagamento integrada.
- **Clerk**: Gerenciamento de autenticação e usuários.

## Pré-requisitos

- Node.js versão 14.x ou superior.
- PostgreSQL configurado.
- Stripe API configurada para o processamento de pagamentos.

## Configuração

### Clone o Repositório

```bash
git clone https://github.com/Humberto08/ecommerce-store.git
```

### Instale as Dependências

```bash
npm install
```
### Configuração do Ambiente
Crie um arquivo .env com a seguinte variável de ambiente, você encontra no Settings da aplicacão [ecommerce-admin](https://github.com/Humberto08/ (ajuste conforme necessário):

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api/869de896-333a-4f3a-b9b6-a45000a2fb54d (Exemplo)
```

### Iniciar o Servidor de Desenvolvimento
Após configurar as variáveis de ambiente, você pode iniciar o servidor de desenvolvimento com:

```bash
npm run dev
```
Abra http://localhost:3001 no seu navegador para visualizar a aplicação.
```
```
## Dependência do Admin
Para que a loja funcione corretamente, você deve configurar e rodar a aplicação [ecommerce-admin](https://github.com/Humberto08/ecommerce-admin), responsável pela administração dos produtos, categorias e gestão de pedidos.

## Configuração do Admin

### Clone o Repositório

```bash
git clone https://github.com/Humberto08/ecommerce-admin.git
```

### Instale as Dependências

```bash
npm install
```
### Configure o Ambiente da Aplicação Admin
Crie um arquivo .env com as seguintes variáveis:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL="postgresql://seu-usuario:senha@localhost:5432/ecommerce-admin"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```
### Gere o Cliente Prisma e Migre o Banco de Dados

```bash
npx prisma generate
npx prisma db push
```
### Execute a Aplicação Admin

```bash
npm run dev
```
## Funcionalidades da Admin
- CMS para gerenciar múltiplos vendedores e produtos.
- Criação, edição e exclusão de categorias, produtos, e filtros (cor, tamanho).
- Integração com Cloudinary para upload de imagens.
- Visualização de pedidos e gráficos de vendas.

<div id='contatos' align="center">
  <p align="center">Made with 💜 by Humberto Luciano</p>
  <div id="contatos" align="center">
    <a href="https://www.linkedin.com/in/humberto-luciano/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
