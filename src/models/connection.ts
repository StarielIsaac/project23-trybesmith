import { createPool } from 'mysql2/promise';

// Cria uma conexão com o banco de dados MySQL
// utilizando as informações de conexão contidas nas variáveis de ambiente
const connection = createPool({
  host: process.env.MYSQL_HOST, // Endereço do servidor MySQL
  user: process.env.MYSQL_USER, // Usuário do MySQL
  password: process.env.MYSQL_PASSWORD, // Senha do MySQL
});

export default connection;