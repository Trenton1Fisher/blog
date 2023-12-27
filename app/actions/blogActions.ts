'use server'

import prisma from '@/lib/prismadb'
import { revalidatePath } from 'next/cache'

export async function CreatePost(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const category = formData.get('category') as string
  const userEmail = formData.get('userEmail') as string
  const image = formData.get('image') as string

  await prisma.blog.create({
    data: {
      img: image,
      title: title,
      description: description,
      category: category,
      userEmail: userEmail,
    },
  })
  revalidatePath('/create')
}

export async function DeletePost(formData: FormData) {
  const id = formData.get('postId') as string

  await prisma.blog.delete({
    where: {
      id: id,
    },
  })

  revalidatePath('/userPosts')
}
