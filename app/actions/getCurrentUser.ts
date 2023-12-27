import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import client from '@/lib/prismadb'

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession()

    if (!session?.user?.email) {
      return null
    }
    const user = await client.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    })
    if (!user) {
      return null
    }
    return user
  } catch (error) {
    console.log(error)
    return null
  }
}
