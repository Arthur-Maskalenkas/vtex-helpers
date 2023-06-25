# processo que ocorre com as variaveis declaradas em funções
Depois que a função termina de executar e o seu frame de execução é removido da call stack, a variável é descartada e o seu espaço na call stack é liberado. No entanto, o valor que a variável continha no memory heap não é automaticamente liberado.

JavaScript usa um processo chamado garbage collection (coleta de lixo) para limpar valores no memory heap que não estão mais sendo usados. Se não houver mais referências a um valor no memory heap (por exemplo, se todas as variáveis que apontavam para ele foram descartadas), o garbage collector pode marcar esse valor como "lixo" e liberar o espaço que ele ocupava no memory heap.

No entanto, a garbage collection não acontece imediatamente após a variável ser descartada. Ela acontece em momentos não determinísticos, quando o motor de JavaScript decide que é um bom momento para fazer a limpeza.

Portanto, em resumo: quando uma função termina de executar, as variáveis que foram declaradas dentro dela são descartadas, mas os valores complexos que essas variáveis continham no memory heap permanecem até que o garbage collector decida liberá-los.


Para tipos primitivos (por exemplo, números, booleanos, null, undefined e strings pequenas), o valor é armazenado diretamente na call stack juntamente com a variável.

No entanto, para tipos de dados mais complexos (por exemplo, objetos, arrays, funções e strings grandes), a variável na call stack contém uma referência para o valor real, que é armazenado no memory heap.

Essa distinção é feita porque os tipos primitivos são menores e mais simples, então eles podem ser armazenados e acessados diretamente na call stack de maneira eficiente. Por outro lado, os tipos de dados mais complexos podem ser grandes e variáveis em tamanho, então é mais eficiente armazená-los no memory heap, que é uma região de memória mais flexível e adequada para armazenar dados grandes e complexos.