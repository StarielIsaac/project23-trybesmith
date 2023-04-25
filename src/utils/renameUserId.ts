export default function renameUserId<T extends Record<string, unknown>>(array: T[]): T[] {
  return array.map((obj) => ({
    ...obj,
    userId: obj.user_id,
    user_id: undefined,
  }));
}