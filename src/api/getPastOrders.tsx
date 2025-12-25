export default async function getPastOrders(page: number): Promise<JSON> {
  const response: Response = await fetch(`/api/past-orders?page=${page}`);
  const data: JSON = await response.json();

  return data;
}