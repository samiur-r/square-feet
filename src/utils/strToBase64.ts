const placeholderImg = () => `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="280.764"
      height="128.354"
      viewBox="0 0 180.119 139.794"
      className="animate-pulse"
    >
      <g
        transform="translate(-13.59 -66.639)"
        paintOrder="fill markers stroke"
      >
        <path
          fill="#d0d0d0"
          d="M13.591 66.639H193.71v139.794H13.591z"
        />
        <path
          d="m118.507 133.514-34.249 34.249-15.968-15.968-41.938 41.937H178.726z"
          opacity=".675"
          fill="#fff"
        />
        <circle
          cx="58.217"
          cy="108.555"
          r="11.773"
          opacity=".675"
          fill="#fff"
        />
        <path
          fill="none"
          d="M26.111 77.634h152.614v116.099H26.111z"
        />
      </g>
    </svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export { toBase64, placeholderImg }
