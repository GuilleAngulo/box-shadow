/** Kudos to Midudev post 🙌 [https://midu.dev/]  */

type UsedUnits = Extract<
  Intl.RelativeTimeFormatUnit,
  'day' | 'hour' | 'minute' | 'second'
>
type DateUnitProps = Record<UsedUnits, number>

const DATE_UNITS: DateUnitProps = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

type UnitValueProps = {
  value: number
  unit: string
}

function getUnitAndValueDate(secondsElapsed: number): UnitValueProps {
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

export const getTimeAgo = (timestamp: number) => {
  const secondsElapsed = (Date.now() - timestamp) / 1000
  const rtf = new Intl.RelativeTimeFormat('en-US')

  const { unit, value } = getUnitAndValueDate(secondsElapsed)
  return rtf.format(value, unit as UsedUnits)
}
