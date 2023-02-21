import React, { useEffect, useState } from 'react'
import { TimeSplit } from '../../../typings/time'
import { timeOffer } from '../../../utils/time'
import { ProductOffer } from '../../LimitedOffer/components/ProductOffer/ProductOffer'
import TimeContainer from '../../LimitedOffer/components/TimeContainer'

/* Hooks */
import { useCssHandles } from 'vtex.css-handles'

/* Handles */
import { CSS_HANDLES } from '../../../constants/CSS_HANDLES'

const BannerLimitedOffer = ({ finalDate, children, seeMore, collectionId, title }: any) => {
  /* Hooks */
  const handles = useCssHandles(CSS_HANDLES)

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
    if (!finalDate) return

    const finalDateFormatted = finalDate.replace(/\//g, '-')

    const timer = setInterval(() => {
      setTimeRemaining(timeOffer(`${finalDateFormatted} GMT-0300`))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [timeRemaining])

  if (!timeRemaining?.hasOffer) return <div className={handles.shelfContainer}>children</div>

  return (
    <div className={handles.containerOffer}>
      <div className={handles.contentWrapper}>
        <div className={handles.containerTitleAndSeeMore}>
          <h2 className={handles.contentTitle}>{title}</h2>
          <a className={handles.seeMore} href={`${collectionId}?map=productClusterIds&order=`}>{seeMore}</a>
        </div>
        <div className={handles.containerCountdown}>
          <TimeContainer time={timeRemaining} />
        </div>
      </div>
      <div className={handles.containerProductOffer}>
        <ProductOffer children={children} />
      </div>
    </div>
  )
}

export default BannerLimitedOffer
