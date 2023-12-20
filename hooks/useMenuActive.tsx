import { useRouter, usePathname } from 'next/navigation'

export default function UseMenuActive(route: any) {
  const router = useRouter()
  const pathName = usePathname()

  const isActive =
    (pathName.includes(route) && route.length > 1) || pathName === route

  return isActive
}
