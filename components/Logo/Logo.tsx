import { SVGProps } from 'react'

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200 54.4961C280.359 54.4964 345.503 119.641 345.503 200C345.503 280.359 280.359 345.504 200 345.504C119.641 345.504 54.4961 280.359 54.4961 200C54.4961 119.641 119.641 54.4961 200 54.4961ZM200 82.5557C135.137 82.5557 82.5547 135.137 82.5547 200C82.5547 264.863 135.137 317.445 200 317.445C264.863 317.445 317.444 264.863 317.444 200C317.444 135.137 264.863 82.5559 200 82.5557Z"
        fill="currentColor"
      />
      <path
        d="M58.8155 322.913L325.072 56.6563L345.503 77.087L79.2462 343.344L58.8155 322.913Z"
        fill="currentColor"
      />
    </svg>
  )
}