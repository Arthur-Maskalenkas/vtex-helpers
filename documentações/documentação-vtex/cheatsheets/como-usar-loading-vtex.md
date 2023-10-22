# repo: 

# repo: https://github.dev/vtex-apps/render-runtime
# caminho: react/components/Preview

# como fazer o loading na vtex:

```javascript
import { Loading } from 'vtex.render-runtime'

  return <Loading />
```

```json
{
  "app--institutional-components": { },
  "app--institutional-components.menu": {
    "component": "Menu",
    "render": "client",
    "preview": {
      "type": "box",
      "height": 96,
      "width": 96,
      "options": {
        "padding": 0,
        "minWidth": 96
      }
    }
  }
}
```