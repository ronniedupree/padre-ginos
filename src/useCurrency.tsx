const intl = new Intl.NumberFormat('en-US', {
  style: "currency",
  currency: "USD"
});

export const priceConverter = (price: number) => intl.format(price);

export default function useCurrency(price: number) {
  return priceConverter(price);
}