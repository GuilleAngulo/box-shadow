import { useEffect, useState } from 'react'

export default function useTimeAgo(timestamp: number, refresh?: number) {
  const [time, setTime] = useState(() => getUnitAndValueDate(timestamp))

  useEffect(() => {
    if (refresh) {
      const interval = setInterval(() => {
        setTime(getUnitAndValueDate(timestamp))
      }, refresh)
      return () => clearInterval(interval)
    }
    setTime(getUnitAndValueDate(timestamp))
  }, [timestamp, refresh])

  const rtf = new Intl.RelativeTimeFormat('en-US')

  const { unit, value } = time
  return rtf.format(value, unit as UsedUnits)
}

export type UsedUnits = Extract<
  Intl.RelativeTimeFormatUnit,
  'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
>
type DateUnitProps = Record<UsedUnits, number>

const DATE_UNITS: DateUnitProps = {
  year: 31540000,
  month: 2628000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

type UnitValueProps = {
  value: number
  unit: string
}

export function getUnitAndValueDate(timestamp: number): UnitValueProps {
  const secondsElapsed = (Date.now() - timestamp) / 1000
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { unit, value }
    }
  }
  return {
    unit: 'seconds',
    value: -secondsElapsed
  }
}
