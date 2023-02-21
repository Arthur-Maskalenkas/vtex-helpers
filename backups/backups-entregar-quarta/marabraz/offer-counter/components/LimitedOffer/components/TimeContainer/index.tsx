import React from "react"
import { TimeSplit } from "../../../../typings/time"
import { formatStringtimeParts } from "../../../../utils/formatStringTime"
import { useCssHandles } from "vtex.css-handles"

const CSS_HANDLES = ["countdown", "countdownItemTitle", "divid", "countdownItemText", "containerCountdownItem"] as const

const TimeContainer = ({ time }: { time: TimeSplit }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.countdown}>
      <div className={handles.containerCountdownItem}>
        <span className={handles.countdownItemTitle}>{formatStringtimeParts(time.days)}</span>
        <span className={handles.countdownItemText}> dias</span>
      </div>
      <hr className={handles.divid} />
      <div className={handles.containerCountdownItem}>
        <span className={handles.countdownItemTitle}>{formatStringtimeParts(time.hours)}</span>
        <span className={handles.countdownItemText}> horas</span>
      </div>
      <hr className={handles.divid} />

      <div className={handles.containerCountdownItem}>
        <span className={handles.countdownItemTitle}>{formatStringtimeParts(time.minutes)}</span>
        <span className={handles.countdownItemText}> minutos</span>
      </div>
      <hr className={handles.divid} />
      <div className={handles.containerCountdownItem}>
        <span className={handles.countdownItemTitle}>{formatStringtimeParts(time.seconds)}</span>
        <span className={handles.countdownItemText}> segundos</span>
      </div>
    </div>
  )
}

export default TimeContainer
