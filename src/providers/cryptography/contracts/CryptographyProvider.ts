export interface HashComparerProps {
  hash: string;
  salt: string;
  rawPassword: string;
}

export abstract class CryptographyProvider {
  abstract hashCreator(
    rawPassword: string,
  ): Promise<{ hash: string; salt: string }>;

  abstract hashComparer(props: HashComparerProps): Promise<boolean>;
}
