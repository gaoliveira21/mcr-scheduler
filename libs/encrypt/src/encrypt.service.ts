import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

@Injectable()
export class EncryptService {
  async encrypt(valueToBeEncrypted: string): Promise<string> {
    const salt = await bcrypt.genSalt();

    const hash = await bcrypt.hash(valueToBeEncrypted, salt);

    return hash;
  }

  async match(valueToBeCompared: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(valueToBeCompared, hash);
  }
}
