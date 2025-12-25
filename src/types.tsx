export type Pizza = {
  id: string,
  name: string,
  category: string,
  description: string,
  image: string,
  sizes: PizzaSizes
}

export type PizzaSizes = Record<string, number>;

export type CartItem = {
  pizza: Pizza,
  price: string,
  size: string
}