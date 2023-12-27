import { useState, useEffect } from 'react'
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

export default function MobileMenue() {
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
            className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="border-b py-5">
              <Link href={'/'}>
                <h1 className="text-3xl font-extrabold text-secondary">
                  Blog <span className="text-primary">T</span>
                </h1>
              </Link>
              <div className="flex gap-5 text-secondary mt-5">
                <FaFacebookSquare />
                <FaSquareInstagram />
                <FaSquareSnapchat />
                <FaSquareXTwitter />
              </div>
            </div>

            <ul className="flex flex-col items-start gap-5 mt-5">
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
            <div className="flex gap-5 flex-1 flex-col py-5">
              <Button
                text="Log In"
                onClick={() => router.push('/api/auth/signin')}
                aria="Log In Button"
              />
              <Button
                text="Sign Up"
                onClick={() => router.push('/api/auth/signin')}
                aria="Sign Up Button"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
