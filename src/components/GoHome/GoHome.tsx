'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'

type GoHomeProps = {
  className: string
}

export default function GoHome({ className }: GoHomeProps) {
  const router = useRouter()
  const goHome = () => {
    router.push('/')
  }
  return <FaArrowLeft onClick={goHome} className={className} />
}
