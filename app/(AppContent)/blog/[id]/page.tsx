import Tag from '@/components/ui/tag'
import Image from 'next/image'
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from 'react-icons/ai'
import { postType } from '@/types/postTypes'
import { formDate } from '@/utils/formDate'
import prisma from '@/lib/prismadb'

const page = async ({ params }: { params: postType }) => {
  const { id } = params
  const post = await prisma.blog.findUnique({
    where: { id },
    include: { user: true },
  })
  return post ? (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[400px] relative mb-5">
        <Image
          fill
          alt="image for blog"
          src={post.img || ''}
          className="object-cover"
        />
      </div>

      <Tag text={post.category} />
      <h2 className="text-4xl font-extrabold uppercase text-tertiary my-3">
        {post.title}
      </h2>

      <div className="flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col">
        <aside
          className="md:sticky
        md:top-3/4 md:h-screen
        "
        >
          <span className="uppercase text-2xl font-extrabold text-tertiary">
            Share:
          </span>
          <div className="flex text-3xl gap-5 text-gray-400 mt-2 [&>*]:border">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </aside>

        <article>
          <p className="text-xl">{post.description}</p>

          <div className="mt-5 flex gap-5 items-center">
            <Image
              src={post.user.image || ''}
              width={500}
              height={500}
              alt={`Image of ${post.user.name}`}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <span>{post.user.name}</span>
              <span>{formDate(post.createdAt)}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  ) : (
    <h1 className="text-3xl font-extrabold">
      Trouble Grabbing Post, Try Again!
    </h1>
  )
}

export default page
