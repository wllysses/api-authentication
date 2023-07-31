
# API Cadastro e Autenticação de usuário 

## Funcionalidades

- Cadastra um novo usuário
- Autenticar um usuário cadastrado gerando um token JWT


## Stack utilizada

**Back-end:** Node, Express, Typescriptm, Prisma

**Banco de dados:** PostgreSQL

**Bibliotecas:** Ts-Node, Nodemon, CORS, dotEnv


## Uso
- inicialmente é necessário a utilização do comando npx prisma init ou yarn prisma init para gerar o arquivo .env com a variável de ambiente.
- É necessário a utilização do comando npx prisma migrate dev ou yarn prisma migrate dev para a geração do banco de dados baseado no modelo já criado no arquivo schema.prisma!


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar criar e adicionar as seguintes variáveis de ambiente no seu arquivo .env

`DATABASE_URL` 

DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/<DB_NAME>?schema=public"

## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install ou yarn
```

Inicie o servidor

```bash
  npm run dev ou yarn dev
```


## Documentação da API

#### Cadastrar um novo usuário

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `full_name`      | `string` | **Obrigatório**. O nome do usuário |
| `email`      | `string` | **Obrigatório**. O e-mail do usuário |
| `password`      | `string` | **Obrigatório**. A senha do usuário |
| `confirm_password`      | `string` | **Obrigatório**. A confirmação da senha do usuário |

Todoss os parâmetros serão passados no body da requisição.

#### Autenticação do usuário

```http
  POST /auth
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. O e-mail do usuário |
| `password`      | `string` | **Obrigatório**. A senha do usuário |

Todos os  parâmetros serão passados no body da requisição.
## Autores

- [@wllysses](https://www.github.com/wllysses)

