# 🚀 Todo Backend - NestJS

API REST simples para gerenciamento de tarefas (CRUD), desenvolvida com NestJS.

---

## 📌 Funcionalidades

* ✅ Criar tarefa
* 📋 Listar tarefas
* ✏️ Atualizar tarefa
* ❌ Deletar tarefa

---

## 🛠️ Tecnologias utilizadas

* Node.js
* NestJS
* TypeScript

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/lucascp05/todo-backend.git
```

### 2. Acessar a pasta

```bash
cd todo-backend
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Rodar o servidor

```bash
npm run start:dev
```

---

## 🌐 Endpoints

### 🔹 Criar tarefa

POST /tasks

```json
{
  "title": "Estudar NestJS",
  "description": "Aprender CRUD"
}
```

---

### 🔹 Listar tarefas

GET /tasks

---

### 🔹 Buscar por ID

GET /tasks/:id

---

### 🔹 Atualizar tarefa

PATCH /tasks/:id

```json
{
  "title": "Atualizado",
  "description": "Nova descrição"
}
```

---

### 🔹 Deletar tarefa

DELETE /tasks/:id

---

## 📈 Status do projeto

🚧 Em desenvolvimento
🔜 Próximos passos:

* Integração com banco de dados
* Validação de dados
* Autenticação de usuários

---

## 👨‍💻 Autor

Desenvolvido por Lucas Assis da Costa Pereira🚀

