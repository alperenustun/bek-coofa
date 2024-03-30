export function makeDiscount(
  price: number,
  discountPercentage: number
): number {
  return (price - price * (discountPercentage / 100));
}
