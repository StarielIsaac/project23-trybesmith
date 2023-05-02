//  Função que renomeia a chave 'user_id' para 'userId' em um array de objetos
export default function renameUserId<T extends Record<string, unknown>>(array: T[]): T[] {
  return array.map((obj) => ({
    ...obj,
    userId: obj.user_id, // renomeia a chave 'user_id' para 'userId'
    user_id: undefined, // remove a chave original 'user_id'
  }));
}