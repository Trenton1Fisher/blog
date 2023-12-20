interface searchParamsTypes {
  id: string
  title: string
  image_path: string
  paragraph: string
  featured: boolean
  topPost: boolean
  tags: string
  authorImage: string
  authorName: string
  publishDate: string
}

export default function Home({
  searchParams,
}: {
  searchParams: searchParamsTypes
}) {
  const post = searchParams

  return (
    <div>
      <p>{post.title}</p>
    </div>
  )
}
