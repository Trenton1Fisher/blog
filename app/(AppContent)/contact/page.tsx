import Image from 'next/image'
import Overlay from '@/components/ui/overlay'
import Button from '@/components/ui/button'
import { Bubblegum_Sans } from 'next/font/google'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[500px] w-full">
        <Image
          src={'/assets/contact.jpg'}
          fill
          alt="Contact Image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          Contact Us
        </h1>
      </div>
      <div className="leading-8 text-lg mt-10 w-full max-w-screen-lg mx-auto rounded-lg text-center bg-white p-8 shadow-md">
        <h1 className="text-4xl font-extrabold w-full text-center uppercase text-primary mb-10">
          Let's Discuss
        </h1>
        <form className="flex flex-col gap-5">
          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text"
              placeholder="Name"
              className="px-3 py-2 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 
              ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 
              ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text"
              placeholder="Subject"
              className="px-3 py-2 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 
              ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-3 py-2 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 
              ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={8}
            className="px-3 py-2 border-gray-300 w-full rounded-md text-gray-900 shadow-sm ring-1 
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"
          />
          <div className="flex justify-center">
            <Button aria="Submit Contact Form" text="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}
