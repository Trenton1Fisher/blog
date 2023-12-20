import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Tag from '../ui/tag'
import Overlay from '../ui/overlay'
import Link from 'next/link'

export default function BlogCard({ post }: any) {
  return (
    <article className="relative rounded-lg overflow-hidden">
      <div className="w-[1000px] h-[450px] relative">
        <Image
          src={post.image_path}
          fill
          alt={`image for${post.title}`}
          className="object-cover"
        />
        <Overlay />
      </div>
      <div className="w-full absolute top-0 h-full p-5 flex flex-col justify-between">
        <div>
          <Tag text={post.tags} />
          <h3 className="text-3xl font-extrabold uppercase text-white">
            {post.title}
          </h3>
        </div>
      </div>
      <Link
        href={{ pathname: `blog/${post.id}`, query: { ...post } }}
        className="absolute bottom-0 right-0 bg-tertiary p-5 text-white rounded-tl-lg z-10 cursor-pointer"
      >
        <AiOutlineArrowRight size={30} />
      </Link>
    </article>
  )
}
