export type PizzaItem = {
  id: string,
  name: string,
  category: string,
  description: string,
  image: string,
  sizes: { [size: string]: number }
}

export type CartItem = {
  pizza: PizzaItem,
  price: string,
  size: string
}