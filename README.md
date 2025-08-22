# 🍔 DevBurger API

Bem-vindo ao **DevBurger API** – a API que alimenta o sistema do DevBurger, permitindo gerenciar pedidos, produtos e categorias de uma hamburgueria de forma prática e rápida.
---

## 📖 Descrição do Projeto

O **DevBurger API** é o backend de uma hamburgueria virtual, desenvolvido para gerenciar produtos, pedidos e categorias de forma prática e segura. A API permite criar, atualizar e consultar pedidos, armazenar informações de usuários com autenticação por JWT e senhas criptografadas, além de suportar upload de imagens de produtos. É ideal para estudos de desenvolvimento de APIs REST e projetos de aprendizado em Node.js.
---

## 🚀 Tecnologias Utilizadas

- **Node.js** – ambiente de execução JavaScript.
- **Express.js** – framework para construção de APIs REST.
- **Sequelize** – ORM para integração com o PostgreSQL.
- **MongoDB** – banco de dados NoSQL.
- **Yup** – validação de dados.
- **UUID** – geração de identificadores únicos.
- **Nodemon** – reinício automático do servidor durante o desenvolvimento.
- **JWT (JSON Web Token)** – autenticação.
- **Bcrypt** – criptografia de senhas.
- **Multer** – upload de imagens.
---

## ⚙️ Funcionalidades

✅ Cadastro e login de usuários.  
✅ Autenticação com JWT.  
✅ Gerenciamento de **produtos** (CRUD completo).  
✅ Gerenciamento de **categorias** (CRUD completo).  
✅ Upload de imagens para produtos.  
✅ Criação e gerenciamento de pedidos.  
✅ Relacionamento entre **produtos, categorias e pedidos**.  
---

## 📂 Estrutura de Pastas

<details>
<summary>Clique para expandir</summary>

```text
devburger-api/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── controller/
│   │   │   ├── CategoryController.js
│   │   │   ├── OrderController.js
│   │   │   ├── ProductController.js
│   │   │   ├── SessionController.js
│   │   │   └── UserController.js
│   │   ├── middlewares/
│   │   │   └── auth.js
│   │   ├── models/
│   │   │   ├── Category.js
│   │   │   ├── Product.js
│   │   │   └── User.js
│   │   └── schemas/
│   │       └── Order.js
│   ├── config/
│   │   ├── auth.js
│   │   ├── database.js
│   │   └── multer.js
│   ├── database/
│   ├── app.js
│   ├── routes.js
│   └── server.js
├── uploads/
├── .gitignore
├── .sequelizerc
├── biome.json
├── devlog.md
├── nodemon.json
├── package-lock.json
├── package.json
├── README.md
└── yarn.lock
```
</details>

## 🛠️ Como rodar o projeto localmente

### 📌 Pré-requisitos
Antes de começar, certifique-se de ter instalado:  
- [Node.js](https://nodejs.org/) (versão 16+ recomendada)  
- [PostgreSQL](https://www.postgresql.org/)  
- [Git](https://git-scm.com/)  

### 📥 Passo 1: Clonar o repositório
```bash
git clone https://github.com/JoaoMendss/devburger-api.git
cd devburger-api
```

### 📦 Passo 2: Instalar as dependências
Utilize o gerenciador de pacotes de sua preferência:

Com npm:
```bash
npm install
```
Ou com yarn:
```bash
yarn
```

### ▶️ Passo 3: Iniciar o projeto
Inicie o servidor de desenvolvimento:

Com npm:
```bash
npm run dev
```
Ou com yarn:
```bash
yarn dev
```

O projeto estará disponível em [http://localhost:3001](http://localhost:3001).

---

Desenvolvido por [JoaoMendss](https://github.com/JoaoMendss)