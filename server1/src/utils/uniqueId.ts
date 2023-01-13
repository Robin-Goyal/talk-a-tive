import crypto from 'crypto';

export const generateUniqueKey = (bytes = 16) => {
  return crypto.randomBytes(bytes).toString('hex');
};
