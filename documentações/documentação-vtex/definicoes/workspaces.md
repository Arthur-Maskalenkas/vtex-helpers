# O que são?

São ambientes apartados ao ambiente de produção que "clonam" toda a estrutura da account master: catálogo, integrações logísticas, aplicativos instalados, etc. Ou seja, com a criação de workspaces é possível desenvolver vários temas ou funcionalidades da loja em diversos ambientes independentes um do outro e simultaneamente (exclusivamente para lojas em IO).

# workspaces podem ter diferenças entre uns aos outros em
* checkout UI
* paginas

# Além disso:

* Todo Workspace é criado, por padrão, com a mesma Edition da conta master (legado ou IO).
* O cliente consegue criar workspaces, mas a alteração da versão da Edition é possível apenas por usuários VTEX (Legado - CMS para IO - Store Edition ou vice-versa)
* Alterações nos Workspaces de desenvolvimento e produção não afetam a loja em produção.
* A criação de Workspaces é gratuita e ilimitada, porém existe apenas um Workspace Master, que é a interface acessada pelo usuário final.
* Existem 3 tipos de Workspaces: De desenvolvimento, de produção e o master.

# Stable and beta versions
App versions are created as stable by default. Beta versions must be explicitly declared and are identified by a dash symbol (-) following a sequence of alphanumeric characters after the version number. For instance, 2.13.5 is a stable version, and you can have a beta version called 2.13.5-beta1.

The recommended use cases for stable and beta versions are:

**Stable**: intended for wide availability and production environments.
**Beta**: intended for tests and limited availability.
Consider the following when dealing with a beta version:

Beta versions cannot be deployed. If you run vtex deploy on a beta version of an app, the accounts and workspaces with that specific app version installed will not be updated to this version.
Beta versions ignore the ttl (time-to-live) parameter set in the service.json file.

# Outros links
https://developers.vtex.com/docs/guides/vtex-io-documentation-releasing-a-new-app-version