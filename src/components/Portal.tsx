import { useRef, useEffect } from 'react'
import * as React from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: React.ReactNode
  selector: string
}

export const Portal: React.FC<Props> = ({ children, selector }) => {
  const ref = useRef<Element>(null)

  useEffect(() => {
    const element = document.querySelector<Element>(selector)
    if (element) {
      ref.current = element
    }
  }, [selector])

  return ref.current ? createPortal(children, ref.current) : null
}
