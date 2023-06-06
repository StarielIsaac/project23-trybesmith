# Trybe Futebol Clube - API de Itens Medievais

Bem-vindo(a) ao Trybe Futebol Clube, uma loja de itens medievais no formato de uma API desenvolvida em Typescript. Esta aplicação permite realizar operações básicas de um banco de dados, como criação, leitura, atualização e exclusão (CRUD). Ela utiliza o banco de dados MySQL e é executada com o auxílio do Docker.

## Configuração

Certifique-se de ter o Docker instalado em sua máquina antes de prosseguir. Siga as instruções a seguir para configurar e executar o projeto:

1. Clone o repositório do Trybe Futebol Clube.

2. No diretório raiz do projeto, execute o seguinte comando para iniciar os serviços do Docker:

   ```shell
   docker-compose up -d
   ```

   Isso iniciará os containers `trybesmith` e `trybesmith_db`, que são responsáveis pela execução da aplicação e do banco de dados MySQL, respectivamente.

3. Para acessar o terminal interativo do container `trybesmith`, execute o seguinte comando:

   ```shell
   docker exec -it trybesmith bash
   ```

   Agora você está pronto(a) para interagir com a aplicação.

## Conexão com o Banco de Dados

A conexão com o banco de dados local requer a configuração de algumas variáveis de ambiente. Certifique-se de definir as seguintes variáveis no arquivo `.env`:

```plaintext
MYSQL_HOST=<endereço_do_host_do_banco_de_dados>
MYSQL_USER=<usuário_do_banco_de_dados>
MYSQL_PASSWORD=<senha_do_banco_de_dados>
```

Para estabelecer a conexão com o banco de dados MySQL, a aplicação utiliza a biblioteca `mysql2/promise`. O trecho de código abaixo demonstra como realizar a conexão:

```typescript
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

export default connection;
```

Certifique-se de fornecer os valores corretos para as variáveis de ambiente mencionadas acima.

## Estrutura do Banco de Dados

O banco de dados utilizado pela aplicação possui três tabelas: `users` (pessoas usuárias), `products` (produtos) e `orders` (pedidos). A estrutura dessas tabelas é descrita abaixo:

```sql
DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA IF NOT EXISTS Trybesmith;

CREATE TABLE Trybesmith.users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  vocation TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES Trybesmith.users (id)
);

CREATE TABLE Trybesmith.products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  order_id INTEGER,
  FOREIGN KEY (order_id) REFERENCES Trybesmith.orders (id)
);
```

## Endpoints

A API do Trybe Futebol Clube segue o padrão REST e possui os seguintes endpoints:

1. **Cadastro de

 Produtos**

   - Endpoint: `POST /products`
   - Descrição: Cria um novo produto no banco de dados.
   - Corpo da requisição: Deve conter os detalhes do produto, como nome e quantidade.
   - Exemplo de requisição:
     ```plaintext
     POST /products
     
     {
       "name": "Espada Longa",
       "amount": "1"
     }
     ```

2. **Listagem de Produtos**

   - Endpoint: `GET /products`
   - Descrição: Retorna a lista de todos os produtos cadastrados no banco de dados.

3. **Cadastro de Pessoas Usuárias**

   - Endpoint: `POST /users`
   - Descrição: Cria uma nova pessoa usuária no banco de dados.
   - Corpo da requisição: Deve conter os dados da pessoa usuária, como nome de usuário, profissão, nível e senha.
   - Exemplo de requisição:
     ```plaintext
     POST /users
     
     {
       "username": "johndoe",
       "vocation": "cavaleiro",
       "level": 3,
       "password": "senha123"
     }
     ```

4. **Listagem de Pedidos**

   - Endpoint: `GET /orders`
   - Descrição: Retorna a lista de todos os pedidos cadastrados no banco de dados.

5. **Login de Pessoas Usuárias**

   - Endpoint: `POST /users/login`
   - Descrição: Realiza o login de uma pessoa usuária.
   - Corpo da requisição: Deve conter as credenciais de login, como nome de usuário e senha.
   - Exemplo de requisição:
     ```plaintext
     POST /users/login
     
     {
       "username": "johndoe",
       "password": "senha123"
     }
     ```

6. **Validações dos Produtos**

   - A aplicação realiza validações nos dados dos produtos, como garantir que o nome e a quantidade sejam fornecidos corretamente.

7. **Validações das Pessoas Usuárias**

   - A aplicação realiza validações nos dados das pessoas usuárias, como garantir que o nome de usuário, a profissão, o nível e a senha sejam fornecidos corretamente.

8. **Cadastro de Pedidos**

   - Endpoint: `POST /orders`
   - Descrição: Cria um novo pedido no banco de dados.
   - Corpo da requisição: Deve conter os detalhes do pedido, como o ID da pessoa usuária e a lista de produtos.
   - Exemplo de requisição:
     ```plaintext
     POST /orders
     
     {
       "user_id": 1,
       "products": [
         {
           "product_id": 1,
           "quantity": 2
         },
         {
           "product_id": 2,
           "quantity": 1
         }
       ]
     }
     ```

Lembre-se de utilizar os verbos HTTP adequados para cada operação e retornar as respostas e códigos de status corretos.

## Contribuição

Se você deseja contribuir para o projeto Trybe Futebol Clube, siga as instruções abaixo:

- Envie pull requests com suas melhorias ou correções de bugs.
- Sugira novas funcionalidades ou reporte problemas utilizando as issues do GitHub.

## Licença

O projeto Trybe Futebol Clube é licenci

ado sob a [MIT License](https://opensource.org/licenses/MIT).

---

Esperamos que este README.md forneça todas as informações necessárias para entender e utilizar o projeto Trybe Futebol Clube. Em caso de dúvidas, consulte a documentação adicional ou entre em contato com a equipe responsável pelo projeto.

Divirta-se explorando a loja de itens medievais! 🏰🛡️
