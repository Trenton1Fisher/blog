import Posts from '@/components/shared/Posts'
import TopPost from '@/components/shared/topPost'

export default function Home() {
  return (
    <div className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] max-w-[1450px] overflow-y-hidden h-fit mt-10 max-lg:space-y-7 mx-auto">
      <Posts />
      <TopPost />
    </div>
  )
}
