export type ContactInformation ={
  name: string,
  email: string,
  message: string
}

export default async function postContact({name, email, message}: ContactInformation): Promise<JSON> {
  const response: Response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  });

  if (!response.ok) {
    throw new Error("Network response was not ok. Send help.");
  }

  const data: JSON = await response.json();

  return data;
}