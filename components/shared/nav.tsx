'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '../ui/button'
import Route from '../ui/route'
import MobileMenue from './mobileMenu'
import UseMenuActive from '@/hooks/useMenuActive'
import { navLinks } from '@/contants'
import clsx from 'clsx'
import { User } from '@prisma/client'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

interface NavProps {
  user: User
}

export default function Navbar({ user }: NavProps) {
  const [isScrolling, setIsScrolling] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={clsx(
        'py-4 w-full',
        isScrolling ? 'fixed top-0 bg-white shadow-lg z-10' : 'relative'
      )}
    >
      <div
        className={clsx(
          'w-[95%] mx-auto max-w-[1450px] flex items-center justify-between border-b border-gray-100',
          isScrolling && 'pb-0 border-none'
        )}
      >
        <div className="flex-1">
          <Link href={'/'}>
            <h1 className="text-3xl font-extrabold text-secondary">
              Blog <span className="text-primary">T</span>
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden">
          {navLinks.map((link, index) => {
            const isActive = UseMenuActive(link.route)
            return (
              <li key={index}>
                <Route
                  route={link.route}
                  label={link.label}
                  isActive={isActive}
                />
              </li>
            )
          })}
        </ul>
        {!user && (
          <div className="flex gap-5 flex-1 justify-end max-md:hidden">
            <Button
              text="Log In"
              onClick={() => router.push('/api/auth/signin')}
              aria="Log In Button"
            />
          </div>
        )}
        {user && (
          <div className="flex relative gap-5 items-center flex-1 justify-end max-md:hidden">
            <h1>{user.name}</h1>
            <Image
              src={user.image as string}
              height={45}
              width={45}
              alt={`Account Image of ${user.name}`}
              className="rounded-full border-4 border-primary cursor-pointer"
              onClick={() => setOpenUserMenu(!openUserMenu)}
            />
            {openUserMenu && (
              <ul className="z-10 absolute right-0 top-full mt-2 w-48 bg-white shadow-md rounded-md p-4">
                <Link href={'/create'} onClick={() => setOpenUserMenu(false)}>
                  <li>Create A Post</li>
                </Link>
                <Link href={'/user'} onClick={() => setOpenUserMenu(false)}>
                  <li>My Posts</li>
                </Link>
                <li className="cursor-pointer" onClick={() => signOut()}>
                  Sign Out
                </li>
              </ul>
            )}
          </div>
        )}
        <div>
          <MobileMenue />
        </div>
      </div>
    </nav>
  )
}
