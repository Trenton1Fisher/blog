import { useState } from 'react'
import { CgMenuGridO, CgClose } from 'react-icons/cg'
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareSnapchat,
} from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'
import Link from 'next/link'
import Button from '../ui/button'
import { navLinks } from '@/contants'
import UseMenuActive from '@/hooks/useMenuActive'
import Route from '../ui/route'
import { useRouter } from 'next/navigation'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'

export default function MobileMenue({ user }: { user: User | null }) {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()

  function MenuHandler() {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <div className="md:hidden" onClick={MenuHandler}>
        {openMenu ? <CgClose size={25} /> : <CgMenuGridO size={25} />}
      </div>

      {openMenu ? (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10"
          >
            <div className="border-b py-5 text-center">
              <Link href={'/'}>
                <h1 className="text-3xl font-extrabold text-secondary">
                  Explore
                  <span className="text-primary">X</span>
                </h1>
              </Link>

              <div className="flex gap-5 text-secondary flex-1 justify-center text-xl mt-5">
                <FaFacebookSquare />
                <FaSquareInstagram />
                <FaSquareXTwitter />
                <FaSquareSnapchat />
              </div>
            </div>

            <ul className="flex items-center justify-center gap-5 flex-col mt-5  py-10 border-b">
              {navLinks.map((link, index) => {
                const isActive = UseMenuActive(link.route)

                return (
                  <li key={index}>
                    <Route
                      route={link.route}
                      label={link.label}
                      isActive={isActive}
                      onClick={() => setOpenMenu(false)}
                    />
                  </li>
                )
              })}
            </ul>

            {!user && (
              <div className="flex gap-5 flex-1 flex-col py-5">
                <Button
                  text="Log In"
                  onClick={() => router.push('/api/auth/signin')}
                  aria="Log in button"
                />
                <Button
                  text="Sign Up"
                  onClick={() => router.push('/api/auth/signin')}
                  aria="Sign up button"
                />
              </div>
            )}

            {user && (
              <div>
                <ul className="flex flex-col  gap-5 items-center">
                  <Link href="/create" onClick={() => setOpenMenu(false)}>
                    <li>Create a Post</li>
                  </Link>
                  <Link href="/user" onClick={() => setOpenMenu(false)}>
                    <li>My Post</li>
                  </Link>

                  <li onClick={() => signOut()}>Sign Out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
