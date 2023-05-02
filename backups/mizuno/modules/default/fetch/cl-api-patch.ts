import { generateSafedata } from "../others/generate-safedata";

export const clApiPatch = async (args: { id: string, cpf: string, email: string }): Promise<any> => {
  const data = await fetch(`${generateSafedata({ entity: 'CL', 'type': 'document' })}`, {
    method: "PATCH",
    headers: { Accept: 'application/vnd.vtex.ds.v10+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      document: args?.cpf,
      email: args?.email
    })
  });

  const JSONData = await data.json();

  return JSONData
}



