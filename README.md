# 📦 **Storage Manager (Sistema de gerenciamento de produtos)**

Este projeto é uma aplicação fullstack para gerenciamento de produtos, composta por um backend em **NestJS** e um frontend web em **Angular**. Ele suporta paginação, validação de entrada, documentação via Swagger, e uma interface interativa para visualizar e manipular produtos.

## 🛠️ **Tecnologias e ferramentas**

### **Backend (API):**

- **NestJS** (Node.js): framework do desenvolvimento da **REST API**

- **TypeScript**: Linguagem principal do backend

- **class-validator / class-transformer**: validação e transformação de dados

- **Swagger (nestjs/swagger)** – documentação da API

- **Express**: servidor HTTP

### **Frontend (Web):**

- **Angular**:

- **TypeScript**: Linguagem principal do backend

- **Axios**: consumo de API

- **NgRx**: gerenciamento de estado das requisições

- **Tailwind CSS / CSS Modules / Styled Components**: para estilização

## 📂 **Estrutura do projeto**

```text
/frontend
├─ src/
│  ├─ components/
│  ├─ pages/
│  └─ services/
/backend
├─ src/
│  ├─ modules/
│  │  └─ products/
│  │     ├─ dto/
│  │     │  └─ find-products-query.dto.ts
│  │     ├─ response-dto/
│  │     │  └─ find-products-query.response-dto.ts
│  │     ├─ repository/
│  │     │  └─ create.repository.ts
│  │     ├─ services/
│  │     │  └─ create.service.ts
│  │     ├─ products.controller.ts
│  │     └─ products.service.ts
│  │     └─ products.repository.ts
│  │     └─ products.module.ts
│  ├─ main.ts
│  └─ app.module.ts
```

## ✅ **Funcionalidades**

### **Backend**:

- CRUD completo de produtos

- Paginação via query params (limit e page)

- Validação de entrada automática

- Transformação de tipos com **ValidationPipe**

- Documentação **Swagger** acessível em /docs

### **Frontend:**

- Listagem paginada de produtos

- Busca e filtros básicos

- Navegação entre páginas

- Integração com a API usando Axios/Fetch

## 🌐 **Endpoints principais**

```text
GET /products?limit=20&page=1       # Lista produtos paginados
POST /products                      # Cria novo produto
GET /products/:id                   # Busca produto pelo ID
PATCH /products/:id                   # Atualiza produto
DELETE /products/:id                # Remove produto
```

Swagger disponível em:

```text
http://localhost:{{PORT}}/api
```

## ⚙️ **Instalação e Execução**

### **Backend**

1. Instale as dependências:

```bash
cd backend
npm install
```

2. Execute a aplicação em modo desenvolvimento:

```bash
npm run start:dev
```

### **Frontend**

1. Instale dependências:

```bash
cd frontend
npm install
```

2. Execute a aplicação:

```
npm start
```

3. Acesse o navegador:

```
http://localhost:{{PORT}}
```

## ✅ **Boas práticas implementadas**
- Validação de dados de entrada no backend

- Transformação automática de query params para tipos corretos

- Paginação segura com limites e valores padrão

- Documentação completa da API com Swagger

- Frontend consumindo API de forma organizada e reativa
