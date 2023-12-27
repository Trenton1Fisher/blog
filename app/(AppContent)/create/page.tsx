import getCurrentUser from '@/app/actions/getCurrentUser'
import CreateForm from '@/components/shared/CreateForm'

export default async function Home() {
  const user = await getCurrentUser()
  return <CreateForm user={user} />
}
