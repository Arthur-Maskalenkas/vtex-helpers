Vai criar um arquivo em mocks com o retorno da api
```json
{
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez"
    }
  ]
}
```

Depois só dale

```javascript
import { beforeEach, describe, expect, jest, test } from '@jest/globals'
import axios from 'axios'
import fs from 'fs/promises'
import RickAndMortyBRL from '../../src/business/integrations/rickAndMortyBRL.js'
import Character from '../../src/entities/character.js'



test('#getCharatersJSON should return a list of Charater Entity', async () => {
// * 💡 simulando que esta batendo na api
  const response = JSON.parse(await fs.readFile('./test/mocks/characters.json'))
  const expected = response.results.map(char => new Character(char))
  jest.spyOn(axios, "get").mockResolvedValue({ data: response })
  const result = await RickAndMortyBRL.getCharactersFromJSON()
  expect(result).toStrictEqual(expected)
})
```