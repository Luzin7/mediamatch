import { pbkdf2Sync, randomBytes } from "crypto";
import {
  CryptographyProvider,
  HashComparerProps,
} from "../contracts/CryptographyProvider";

export class CryptographyProviderImplementation
  implements CryptographyProvider
{
  async hashCreator(
    rawPassword: string,
  ): Promise<{ hash: string; salt: string }> {
    const salt = randomBytes(16).toString("hex");

    const hash = pbkdf2Sync(rawPassword, salt, 10000, 64, "sha256").toString(
      "hex",
    );

    return { hash, salt };
  }

  async hashComparer({
    hash,
    rawPassword,
    salt,
  }: HashComparerProps): Promise<boolean> {
    const newHash = pbkdf2Sync(rawPassword, salt, 10000, 64, "sha256").toString(
      "hex",
    );

    return newHash === hash;
  }
}
