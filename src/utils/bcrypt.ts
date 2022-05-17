import * as bcrypt from 'bcrypt';

export function hashPassword(password: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, SALT);
}

export function comparePasswords(password: string, storedPasswordHash: string) {
  return bcrypt.compareSync(password, storedPasswordHash);
}