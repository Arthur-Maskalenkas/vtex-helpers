# seletores css | seletores

## seleciona todas imagens que contem "opt" no alt
img[alt*="opt"] {
  background: red;
}

## selecione todas imagens que comecem com "opt" no alt - restrito - pega a palavra inteira
img[alt|="opt"] {
  background: red;
}

se houver 3 imagens: alt="opt-um" & alt="optdois" & alt="opt-tres", ela vai selecionar somente o primeiro e o ultimo, pois ele pega a palavra inteira

## selecione todas as imagens que comecem com "opt" no alt
img[alt^="opt"] {
  background: red;
}

## selecione todas as imagens que terminem com "opt" no alt
img[alt$="opt"] {
  background: red;
}

## selecione uma classe que não contenha a classe Y como irmã
    :global(.vtex-search-result-3-x-accordionFilter:not(.overflow-scroll)) {}

## selecione tudo, menos containrs que contenham classes com summary e seus respectivos filhos
:global(.vtex-search-2-x-biggy-autocomplete-wrapper) {
  *:not([class*="summary"] *) {
    line-height: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
}