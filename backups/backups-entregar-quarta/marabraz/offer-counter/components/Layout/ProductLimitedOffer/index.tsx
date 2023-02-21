import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'

import type { ProductSpecification } from 'vtex.product-context/react/ProductTypes'
import { TimeSplit } from '../../../typings/time'
import { formatDate } from '../../../utils/formatDate'
import { formatStringtimeParts } from '../../../utils/formatStringTime'
import { timeOffer } from '../../../utils/time'

/* Hooks */
import { useCssHandles } from 'vtex.css-handles'

/* Handles */
import { CSS_HANDLES } from '../../../constants/CSS_HANDLES'

const ProductLimitedOffer = () => {
  /* Hooks */
  const handles = useCssHandles(CSS_HANDLES)

  const context = useProduct()

  const [offer, setOffer] = useState<ProductSpecification>()

  /* States */
  const [timeRemaining, setTimeRemaining] = useState<TimeSplit>({
    days: 99,
    hours: 99,
    minutes: 99,
    seconds: 99,
    hasOffer: false,
  })

  /* Effects */
  useEffect(() => {
    if (!offer?.values[0]) return

    const finalDateFormatted = formatDate(offer?.values[0])

    const timer = setInterval(() => {
      setTimeRemaining(timeOffer(`${finalDateFormatted} GMT-0300`))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [timeRemaining, offer])

  useEffect(() => {
    setOffer(
      context?.product?.properties.filter(prop => {
        return prop.name === 'limitedOffer'
      })[0]
    )
  }, [context])

  if (!timeRemaining?.hasOffer) return null

  return (
    <>
      {offer && (
        <div className={handles['offer-wrapper']}>
          <div className={handles['icon-container']}>
            <div className={handles['icon']}></div>
          </div>
          <div className={handles['offer-content']}>
            <div className={handles['title-container']}>
              <span className={handles['title']}>Oferta termina em:</span>
            </div>
            <div className={handles['time-container']}>
              <span className={handles['days']}>
                {formatStringtimeParts(timeRemaining.days)}
                <span className={handles['days-id']}>D</span>
              </span>{' '}
              <div className={handles['hours']}>
                <span>
                  {formatStringtimeParts(timeRemaining.hours)}
                  <span>:</span>
                </span>
                <span className={handles['minutes']}>
                  {formatStringtimeParts(timeRemaining.minutes)}
                  <span>:</span>
                </span>
                <span className={handles['seconds']}>
                  {formatStringtimeParts(timeRemaining.seconds)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductLimitedOffer
