import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="2"
      />
      <use
        href={`#${id}-path1`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="2"
      />
      <use
        href={`#${id}-path2`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="2"
      />
      <defs>
        <polygon
          id={`${id}-path`}
          points="24.4 7.92 24.4 24.48 7.6 24.48 7.6 7.92 2 7.92 2 30 7.6 30 24.4 30 30 30 30 7.92 24.4 7.92"
        />
        <rect
          id={`${id}-path1`}
          x="12.8" y="13.04" width="6.41" height="6.32"        />
        <rect
          id={`${id}-path2`}
          x="12.8" y="2" width="6.41" height="6.32"        />

        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
          <use href={`#${id}-path1`} />
          <use href={`#${id}-path2`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 170 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <polygon
        className={invert ? 'fill-white' : 'fill-neutral-950'}

        points="70.72 2.39 70.72 29.61 65.71 29.61 65.71 17.95 51.62 17.95 51.62 29.61 46.57 29.61 46.57 2.39 51.62 2.39 51.62 13.63 65.71 13.63 65.71 2.39 70.72 2.39"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}

        d="m78.07,29.61V2.39h5.05v27.22h-5.05Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}

        d="m109.06,15.73h4.74v10.8c-1.39,1.15-3.03,2-4.9,2.59s-3.76.88-5.71.88c-2.13,0-4.08-.35-5.85-1.03-1.77-.69-3.33-1.67-4.64-2.94-1.33-1.27-2.36-2.75-3.07-4.43-.73-1.69-1.1-3.56-1.1-5.61s.37-3.91,1.1-5.59c.72-1.69,1.76-3.17,3.09-4.44,1.34-1.27,2.9-2.25,4.67-2.94,1.77-.68,3.75-1.03,5.93-1.03s4.35.38,6.2,1.12c1.85.76,3.41,1.85,4.68,3.32l-3.2,3.1c-1.06-1.06-2.21-1.84-3.44-2.34-1.23-.51-2.59-.76-4.06-.76s-2.78.23-3.98.69c-1.21.47-2.25,1.14-3.13,1.99-.89.85-1.57,1.87-2.07,3.03-.49,1.16-.73,2.45-.73,3.85s.24,2.65.73,3.83c.5,1.18,1.18,2.19,2.07,3.05.88.87,1.91,1.52,3.1,1.99,1.19.46,2.52.7,3.97.7,1.35,0,2.65-.22,3.91-.65.58-.19,1.14-.45,1.69-.77v-8.42Z"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}

        d="m139.08,15.73h4.74v10.8c-1.39,1.15-3.03,2-4.9,2.59s-3.76.88-5.71.88c-2.13,0-4.08-.35-5.85-1.03-1.77-.69-3.33-1.67-4.64-2.94-1.33-1.27-2.36-2.75-3.07-4.43-.73-1.69-1.1-3.56-1.1-5.61s.37-3.91,1.1-5.59c.72-1.69,1.76-3.17,3.09-4.44,1.34-1.27,2.9-2.25,4.67-2.94,1.77-.68,3.75-1.03,5.93-1.03s4.35.38,6.2,1.12c1.85.76,3.41,1.85,4.68,3.32l-3.2,3.1c-1.06-1.06-2.21-1.84-3.44-2.34-1.23-.51-2.59-.76-4.06-.76s-2.78.23-3.98.69c-1.2.47-2.25,1.14-3.13,1.99-.89.85-1.57,1.87-2.07,3.03-.49,1.16-.73,2.45-.73,3.85s.24,2.65.73,3.83c.5,1.18,1.18,2.19,2.07,3.05.88.87,1.91,1.52,3.1,1.99,1.19.46,2.52.7,3.97.7,1.35,0,2.65-.22,3.91-.65.58-.19,1.14-.45,1.69-.77v-8.42Z"
      />
      <polygon
        className={invert ? 'fill-white' : 'fill-neutral-950'}

        points="170.92 25.33 170.92 29.61 150.5 29.61 150.5 2.39 170.37 2.39 170.37 6.67 155.56 6.67 155.56 13.71 168.7 13.71 168.7 17.87 155.56 17.87 155.56 25.33 170.92 25.33"
      />
    </svg>
  )
}
