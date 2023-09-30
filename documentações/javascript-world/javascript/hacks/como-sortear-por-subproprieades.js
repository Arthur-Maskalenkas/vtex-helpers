# sorteando por subpropriedades.Exemplo: ordenar por cor



const sortColors = (a: any, b: any) => {
  const specificationGroupsA = a.specificationGroups?.find((specifications: any) => specifications?.name === 'allSpecifications')?.specifications?.find((specification: any) => specification?.name === 'Níveis de Tons')?.values?.[0]

  const specificationGroupsB = b?.specificationGroups?.find((specifications: any) => specifications?.name === 'allSpecifications')?.specifications?.find((specification: any) => specification?.name === 'Níveis de Tons')?.values?.[0]

  return specificationGroupsA - specificationGroupsB;
};

items.sort(sortColors);
