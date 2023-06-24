# Salvando Arquivos Com Modules

## Atualmente temos um arquivo na pasta anteiroro chamado database.json. Ele esta assim:

```json
[
  {
    "id": 1,
    "vehicles": [
      "Motocicleta",
      "Carro",
      "Caminhão"
    ],
    "kmTraveled": 10000,
    "from": "2009-01-01",
    "to": "2020-11-26"
  }
]
```

## A ideia é:
* pegar os dados atuais
* concatenar com os antigos
* salvar

## ou seja,

```javascript
import { readFile, writeFile } from "node:fs/promises";

export const save = async (data) => {
  // caminho atual do arquivo
  const currentDatabaseLocation = new URL('../database.json', import.meta.url)

  // lendo as informações atuais do arquivo
  const currentDatabaseData = JSON.parse(await readFile(currentDatabaseLocation, { encoding: 'utf-8' }))

  // adicionando as novas informações
  currentDatabaseData.push(data)

  // juntando as informações antigas + novas
  await writeFile(currentDatabaseLocation, JSON.stringify(currentDatabaseData))
}
```