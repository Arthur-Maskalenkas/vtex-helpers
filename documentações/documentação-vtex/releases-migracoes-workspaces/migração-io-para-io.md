1 - Logar no admin principal;
2 - Criar dois WS - Prod e Dev: Exemplo homologavanti e devavanti;
3 - Alterar vendor e name no manifest dos apps da loja https://prnt.sc/GLvFalW2gn95 para não correr o risco de ter algum com mesmo nome na loja principal;
    3.1 - Alterar o nome da store-theme para outro, pois como dito anteriormente, caso tenha dois apps com o mesmo NAME, vai ser sobreescrito ja que a vendor utilizada vai ser a mesma.
    3.2 - Exemplo de alteração de name: store-theme-avanti
    3.3 - Alterar nome de arquivos de CSS dos apps, pois como a loja estava sendo desenvolvida em um subaccount estão com a vendor diferente, exemplo: rovitexiodev.avanti-menu.css para rovitex.avanti-menu.css
4 - Desinstalar no WS de Prod e Dev apps da loja atual
5 - Linkar os apps no WS de Dev e conferir se estão com algum problema;
     5.1 - Problema comum, quando remove a store anterior se perde a page da loja, necessário fazer um apontamento de mutation no Graphql - pages, igual fazemos em release de major
6 - Pegar pelo runtime da loja os conteúdos já cadastrados de Site Editor e deixar fixo no código; 📌
7 - Fazer release dos apps e instalarem no WS de Prod;
    7.1 - Caso tenha algum conteúdo que não foi possível pegar via runtime, recadastrar via Site editor no WS de Prod;
8 - Possivelmente necessário release major na store, seguir todos os passos da Doc(https://community.jobber.team/articles/862) no WS de Prod já criado(Passo 2#) com exceção do passo final(9# - promote), esse passo só será feito no Go Live;
9 - Backup de checkout, salvar em uma pasta chamada bkp-checkout-oldstore:
     9.1 - Salvar o conteúdo HTML do Header e Footer do checkout atual
     9.2 - Salvar o CSS e JS do checkout atual;
10 - Backup e-mails transacionais em uma pasta chamada bkp-email-oldstore
     10.1 - Criar cada arquivo em html de cada e-mail custom que o cliente tenha
     10.2 - Copiar e colar o html do admin de cada e-mail em seu respectivo bkp
11 - Bkp da loja no ar, criar um WS de Prod chamado bkplojaatual
12 - no Go live, copiar o HTML de header e footer do nosso checkout feito no subaccount e substituir o atual
       12.1 - Mesmo processo para JS e CSS de checkout
       12.2 - Verificar se a loja não utiliza de um CSS antigo chamado checkout-custom, caso tenha necessário fazer backup dele também e no dia do Go live exclui-lo do files manager
13 - Fazer mesmo processo com os e-mails transacionais
       13.1 - Conferir antes se existem algum e-mail que teve customização em seu conteúdo fugindo do padrão criado por nós
       13.2 - Se tiver alguma customização necessário fazer adaptação em nossos e-mails
14 - Fazer promote do WS de Prod para master
15 - Pós Go Live, criar um WS de Prod de bkp chamado bkpavantiio



## Objetivo: migrar o IO da subAccount rovitexIoDev (possui io) para a subaccount rovitex (possui io)

1 -📌 O desenvolvedor esta logado na subaccount rovitexIoDev
2 -📌 então irá utilizar vtex login rovitex
3 -📌 e dentro da subaccount rovitex criara um workspace chamado "devavanti"
4 -📌  e vai alterar as referencias feitas a subaccount rovitexIoDev para Rovitex. cmt
4.1 -📌 Alterar a vendor de todos os apps. Exemplo: rovitexIoDev.avanti-menu vai passar a ser rovitex.avanti-menu
4.2 -📌 Alterar os nomes dos arquivos que fazem referencia a vendor. por exemplo: rovitexiodev.avanti-menu.css precisa ser rovitex.avanti-menu.css
4.3 -📌 Importante se atentar ao nome dos apps. Por exemplo: caso tenha um app com o name 'store-theme' no ar e você tiver outro app com o nome de 'store-theme', então o seu app vai substituir o que esta no ar.
5 -📌 e também desinstalara os apps da nova subaccount
5.1 -📌 Todos os apps da subaccont Rovitex precisam ser desinstalados, pois não vão ser utilizados após a migração. Por exemplo: desinstalar os apps rovitex.m3-app e etc.
6 - e após estar logado na subaccount rovitex, em um workspace chamado devavanti, e tendo mudado as referencias da subaccount rovitexIoDev para a subaccount rovitex e excluido todos os apps da subaccount rovitex o dev irá linkar no workspace
6.1 importante linkar todos os apps da subaccount rovitexIoDev
7 - Com tudo linkado corretamente, o dev irá fazer o release de cada app e vai instalar no workspace devavanti
8 - após instalar todos os apps no workspace homologavanti é necessario utilizar o pages do graphql
8.1 - o pages do graphql só funciona em apps que possuem o builder "store"
8.2 - basicamente ele diz: quero migrar do app template@1.x para o app store-theme-avanti@2.x


```gql
mutation{
  # basicamente estou falando: pare de utilizar o app template que possui um builder da store e comece a utilizar o app store-theme-avanti que possui builder da store
  updateThemeIds(from: "lojapicpayb2b.picpay-b2b-store-theme@5.x",to: "lojapicpayb2b.picpay-b2b-store-theme@6.x")
}
```
9 - Após usar a query, o dev ira deslinkar tudo com vtex unlink --all
10 - irá entrar na loja para ver se esta tudo ok.

Após todos os passos, é importante ter backup de:
* schemas da loja
* emails (o miolo deles principalmente)
* checkout (footer,headere,js,css)
* um workspace igual a master (para isso vá para o workspace master e vtex use bkpprod --PRODUCTION) PRECISA SER DE PRODUÇÃO

Quando for go live é importante:
1.substituir o checkout
2.substituir os emails (prestar atenção no miolo)
3.fazer promote do WS de produção para master 


após o golive:
* criar um WS de Prod de bkp chamado bkpavantiio - PRECISA SER DE PRODUÇÃO

# Para que serve o workspace de produção
Serve tanto para utilizar promote quanto para atualizar o conteudo que não é possivel atualizar nos blocos.

# Parar que tudo funcione

CONFIGRA O VTEX LIST DA SUB QUE VAI SER MIGRADA E COMPARE PONTO A PONTO