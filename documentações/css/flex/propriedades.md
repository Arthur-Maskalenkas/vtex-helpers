# flex-shrink Para fazer com que um elemento filho de um elemento flex pegue apenas o tamanho que tem dentro dele,
você pode usar a propriedade "flex-shrink" no elemento filho e definir o valor como 0. Isso fará com que o elemento filho não encolha para se ajustar ao espaço disponível no elemento pai. Além disso,
você também pode definir a largura máxima do elemento filho para limitar seu tamanho. 

# flex-grow: número;
Define a capacidade de um item crescer dentro do container. Exemplo: flex-grow: 1;
permite que um item cresça proporcionalmente em relação aos outros itens dentro do container. 

# flex-shrink: número;
Define a capacidade de um item encolher dentro do container. Exemplo: flex-shrink: 0;
impede que um item encolha e se ajuste para caber dentro do container. 

# flex-basis: auto/tamanho;
Define o tamanho inicial de um item antes de serem aplicadas as propriedades de crescimento ou encolhimento. Exemplo: flex-basis: 50%;
define o tamanho inicial de um item como 50% da largura do container. 

# Como fazer os filhos ocuparem todo o espaço, flex: 1 vs stretch
Peço desculpas pela minha resposta anterior,
houve um erro de digitação. Quando justify-items: stretch e align-items: stretch são usados juntos,
eles podem ter o mesmo efeito de flex: 1,
pois esticam os elementos filhos tanto na direção horizontal quanto na vertical para preencher todo o espaço disponível do container flex. No entanto,
é importante lembrar que justify-items e align-items controlam a distribuição dos elementos filhos em diferentes eixos. justify-items controla como os elementos são distribuídos ao longo do eixo principal,
enquanto align-items controla como os elementos são distribuídos ao longo do eixo secundário. Quando ambos estão definidos como stretch,
os elementos filhos serão esticados em ambos os eixos,
mas pode haver diferenças na distribuição em relação ao uso de flex: 1. Por exemplo,
se houver apenas um elemento filho,
flex: 1 fará com que ele ocupe todo o espaço disponível,
enquanto justify-items: stretch e align-items: stretch farão com que ele seja esticado para preencher todo o espaço,
mas ele ainda será centralizado no container. Em resumo,
as duas configurações podem produzir resultados semelhantes,
mas a distribuição dos elementos pode ser diferente.