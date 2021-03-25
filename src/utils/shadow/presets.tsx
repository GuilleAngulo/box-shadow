export const Preset1 = () => {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="400" fill="#1F2229" />
      <g filter="url(#filter0_dddd)">
        <rect x="75" y="85" width="240" height="240" rx="10" fill="#1F2229" />
      </g>
      <defs>
        <filter
          id="filter0_dddd"
          x="-45"
          y="-15"
          width="460"
          height="440"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="10"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dx="30" dy="30" />
          <feGaussianBlur stdDeviation="40" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="10"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow"
          />
          <feOffset dx="-50" dy="-30" />
          <feGaussianBlur stdDeviation="40" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.568627 0 0 0 0 1 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_dropShadow"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect4_dropShadow"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.8 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow"
            result="effect4_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}