import Link from 'next/link'
import clsx from 'clsx'

interface routeProps {
  route: string
  label: String
  isActive?: boolean
  onClick?: () => void
}

export default function Route({ route, label, isActive, onClick }: routeProps) {
  return (
    <>
      <Link
        href={route}
        onClick={onClick}
        className={clsx(isActive && 'text-primary')}
      >
        {label}
      </Link>
    </>
  )
}
