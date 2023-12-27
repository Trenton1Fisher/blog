import { User } from '@prisma/client'

export type postType = {
  id: string
  createdAt: string | Date
  title: string
  img: string | null
  description: string
  featured: boolean
  topPost: boolean
  category: string
  user: User
}
