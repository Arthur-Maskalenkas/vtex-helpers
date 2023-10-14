# Como autenticar no graphql:
Para se autenticar no graphql é necessario que seja passados um cookie chamado VtexIdClientAutCookie

```javascript
  const vtexIdToken =
    ctx.cookies.get('VtexIdclientAutCookie') ?? ctx.get('VtexIdclientAutCookie')  
```

<br>

Porém não é necessario, basta usar a diretiva AuthorizationMetrics que ja é feito isso automaticamente.
[o link para acessar o repositorio seria esse](https://github.dev/vtex-apps/store-graphql/blob/56d8a3046adf1b4894f408be1bf74c9b697aa019/node/directives/index.ts)

```javascript
export class MasterData extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(`http://api.vtex.com/${ctx.account}`, ctx, {
      ...options,
      headers: {
        ...options?.headers,
        ...{ Accept: 'application/vnd.vtex.ds.v10+json' },
        ...(ctx.adminUserAuthToken
          ? { VtexIdclientAutCookie: ctx.adminUserAuthToken }
          : null),
        ...(ctx.storeUserAuthToken
          ? { VtexIdclientAutCookie: ctx.storeUserAuthToken }
          : null),
      },
    })
  }
  ```

ou 

```javascript
export default class subscriptions extends ExternalClient {
	constructor(context: IOContext, options?: InstanceOptions) {
		super(`http://${context.account}.vtexcommercestable.com.br`, context, {
			...options,
		}
		)
	}

	public async getSubscriptionsByEmail(email: string, settings: Settings): Promise<string> {
		return this.http.get(`/api/rns/pub/subscriptions?customerEmail=${email}&page=1&size=2147483647`, {
			headers: {
				'X-VTEX-API-AppKey': settings.appKey,
				'X-VTEX-API-AppToken': settings.appToken,
				'Proxy-Authorization': this.context.authToken
			}
		})
	}
  ```



# duvida community 1

## duvida
Existe alguma documentação, ou trecho de código que mostre ou explique sobre autenticação dentro das apis e etc? Temos os clássicos headers de api-key e token, mas passando pelos repositórios vi que são, utilizados diversos outros pelos builders, e etc…

## resposta
Acho que a seção [Authentication](https://github.com/vtex-apps/store-graphql/blob/master/node/clients/checkout.ts) 56 do guia Connecting to VTEX Core Commerce APIs dá uma luz inicial nesse tema. Basicamente, apps rodando no VTEX IO conseguem obter:

* App tokens com ctx.authToken
* Store user tokens com ctx.vtex.storeUserAuthToken
* Admin user tokens com ctx.vtex.adminUserAuthToken
Estes tokens devem ser passados pelo header VtexIdclientAutCookie para o request ser autenticado por eles. As permissões vinculadas serão aquelas descritas pelas policies do app ou pelo perfil de acesso do usuário.

Se você quiser fazer um request para uma API REST da sua máquina, usando o Postman por exemplo, você pode rodar vtex local token na VTEX IO CLI 11 e usar esse mesmo header. Só deve lembrar que, ao contrário de app key e app token padrão, esses tokens expiram após um tempo.

* IO Apps não precisam de appKey/appToken para fazer requisições às APIs da VTEX, portanto não é necessário solicitar ao lojista a criação deste par. Cada aplicativo terá seu próprio token rotativo que pode ser usado no código do aplicativo.

* Em alguns casos, não é ideal usar o token do app (ex: a autorização é importante e depende do usuário que está chamando), mas você pode usar o token do usuário , usando ctx.vtex.storeUserAuthTokenou ctx.vtex.adminUserAuthToken.

Alguns exemplos
CheckoutClient - https://github.com/vtex-apps/store-graphql/blob/master/node/clients/checkout.ts

