export function textShortener(plainText: string, limit: number) {
  const shortText = `${plainText?.substring(0, limit)}`;

  return shortText;
}
