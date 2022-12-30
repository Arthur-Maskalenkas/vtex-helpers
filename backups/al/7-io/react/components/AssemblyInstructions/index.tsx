import React, { useEffect, useState } from 'react';
import { useProduct } from 'vtex.product-context';
import styles from './styles.css'


const AssemblyInstructions = () => {
  const productContext = useProduct();
  const [manualLink, setManualLink] = useState<string>('');
  const [hasManual, setHasManual] = useState<boolean>(false);
  const productSpecificationGroups = productContext?.product?.specificationGroups
  const filterManual = productSpecificationGroups?.filter((e: any) => e.originalName ==='Manual')

  useEffect(() => {
    if (filterManual && filterManual.length >= 1) {
      setManualLink(filterManual[0]?.specifications[0]?.originalName);
      setHasManual(true);
    }
  }, [productSpecificationGroups])

  return (
    <>
      {hasManual &&
        <a className={styles.containerButton} href={manualLink} target="blank">
          Baixar manual
        </a>
      }
    </>
  )
}

export default AssemblyInstructions;
