export interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, password_hash: string): Promise<boolean>;
}
