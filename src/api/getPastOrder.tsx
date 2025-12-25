

export default async function getPastOrder(order: string): Promise<JSON> {
  const response: Response = await fetch(`/api/past-order/${order}`);
  const data: JSON = await response.json();
  
  return data;
}