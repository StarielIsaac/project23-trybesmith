import app from './app';

// Define a porta em que o servidor irá escutar
const PORT = 3001;

// Inicializa o servidor, fazendo ele escutar na porta definida acima
const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

// Exporta o servidor para que ele possa ser usado em outros arquivos
export default server;