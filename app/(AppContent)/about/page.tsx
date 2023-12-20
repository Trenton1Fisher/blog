import Image from 'next/image'
import Overlay from '@/components/ui/overlay'

export default function Home() {
  return (
    <div className="w-[95%] max-w-[1450px] mx-auto">
      <div className="relative h-[500px] w-full">
        <Image
          src={'/assets/abouts.jpg'}
          fill
          alt="About Image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          {' '}
          About Us
        </h1>
      </div>
      <div
        className="leading-8 text-lg bg-white relative m-auto rounded-lg p-5 shadow-xl mt-[-80px] 
      text-center w-[90%] max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none"
      >
        <p>
          Welcome to Blog T - Trenton's Digital Portfolio Greetings! I'm
          Trenton, and within the digital realms of Blog T, I present a curated
          fusion of chaos and creativity. This platform serves as a testament to
          the extraordinary moments that inject a dose of enchantment into the
          tapestry of everyday life. Through spontaneous narratives and
          contemplative musings on chaos theory, Blog T encapsulates my
          exploration of the intricate interplay between order and randomness.
          Join me in this intellectual journey as we navigate the nuances of
          life's vibrant twists and turns.Blog T transcends the conventional
          notion of a blog; it stands as a meticulously crafted digital
          portfolio. Each post reflects a carefully chosen lens through which I
          examine the beauty inherent in life's chaotic dance. In this curated
          collection, spontaneity becomes a vehicle for storytelling,
          transforming seemingly mundane encounters into narratives that
          resonate. Embark with me on this academic odyssey, where every click
          unravels a new layer in the sophisticated tapestry of existence.
        </p>
      </div>
    </div>
  )
}
