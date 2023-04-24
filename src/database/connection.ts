import { createPool } from 'mysql2';

const connection = createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'Trybesmith',
});

export default connection;