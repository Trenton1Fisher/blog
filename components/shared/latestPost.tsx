'use client'

import { useState } from 'react'
import { blogData } from '@/contants/blogData'
import BlogCard from './blogCard'
import Button from '../ui/button'

export default function LatestPost() {
  const latestPosts = blogData.filter(blog => blog.latestPost === true)
  const [visibleBlogs, setVisibleBlogs] = useState(3)

  function showMoreBlogs() {
    setVisibleBlogs(prev => prev + 3)
  }

  return (
    <section className="col-span-2" aria-labelledby="latest-post">
      <div className="w-full text-center">
        <h2
          id="latest-post"
          className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          Lastest Post
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full">
        {latestPosts.slice(0, visibleBlogs).map((post, id) => (
          <BlogCard post={post} key={id} />
        ))}
        {visibleBlogs < latestPosts.length && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreBlogs}
              text="Show More"
              aria="Show More Blog Posts"
            />
          </div>
        )}
      </div>
    </section>
  )
}
