# 📦 Sistema de Gestão para Cafeteria – Backend

Este projeto consiste no desenvolvimento de um **backend para gestão de uma cafeteria**, utilizando **NestJS**, **Prisma** e **PostgreSQL**, 
com foco em **segurança**, **controle de acesso** e **modelagem relacional**.

O sistema permite o gerenciamento de produtos, pedidos, clientes, funcionários, fornecedores, lojas e formas de pagamento, além de controle de 
autenticação e autorização baseado em perfis de usuário.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Prisma**
- **PostgreSQL**
- **JWT (JSON Web Token)**
- **class-validator / class-transformer**
- **bcrypt** (hash de senha)

---

## 🧱 Arquitetura do Projeto

O projeto segue a arquitetura modular do NestJS:

- **Controllers**: responsáveis pelas rotas HTTP
- **Services**: regra de negócio
- **DTOs**: validação e tipagem de dados
- **Modules**: organização e encapsulamento de contexto
- **Prisma**: acesso e persistência de dados

Cada entidade principal possui seu próprio módulo, service, controller e DTOs.

---

## 🗃️ Modelagem do Banco de Dados

O banco de dados é relacional e foi modelado com o **Prisma Schema**, incluindo:

### Principais Entidades

- Pessoa
- Cliente
- Funcionário
- Produto
- Pedido
- Fornecedor
- Loja
- Cargo
- Forma de Pagamento

---

## 🔐 Autenticação e Segurança

### Autenticação
- Implementada com **JWT**
- Token gerado no login
- Token enviado via header
- 
## Informações Adicionais 
Projeto desenvolvido para fins educacionais.
