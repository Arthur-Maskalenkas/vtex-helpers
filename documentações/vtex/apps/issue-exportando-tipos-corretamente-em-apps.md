Quando o tipo ou interface não for exportada e aparecer em node_modules, basta ir no arquivo raiz presente em React e dar um export *.

```js react/useglobalcontextavantifooter
import { useGlobalContextAvantiFooter } from './global-context/contexts/global-avanti-footer-context/global-context-avanti-footer'
export * from './global-context/contexts/global-avanti-footer-context/global-context-type-avanti-footer'

export default useGlobalContextAvantiFooter
```
