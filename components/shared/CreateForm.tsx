'use client'

import Form from '../ui/form'
import Input from '../ui/input'
import { useEdgeStore } from '@/lib/edgestore'
import { useState, useEffect } from 'react'
import { SingleImageDropzone } from '../ui/uploadImage'
import { userType } from '@/types/userTypes'
import { CreatePost } from '@/actions/blogActions'
import Button from '../ui/button'

export default function CreateForm({ user }: { user: userType }) {
  const [file, setFile] = useState<File>()
  const [imagePath, setImagePath] = useState('')
  const { edgestore } = useEdgeStore()

  const uploadImageHandler = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      })
      setImagePath(res.url)
    }
  }

  useEffect(() => {
    if (file) {
      uploadImageHandler()
    }
  }, [file])

  return (
    <div className="mt-8 mx-auto w-full max-w-3xl px-4">
      <div className="bg-white py-8 shadow rounded-lg px-10 ">
        <h1 className="text-center text-2xl font-extrabold mb-10">
          Create A Post
        </h1>
        {!user ? (
          <h2 className="text-center text-xl font-extrabold uppercase">
            Please Log in to create a post
          </h2>
        ) : (
          <>
            <SingleImageDropzone
              onChange={file => {
                setFile(file)
              }}
              value={file}
              width={200}
              height={200}
            />
            <Form
              action={CreatePost}
              className="flex flex-col gap-5 mt-5"
              onSubmit={() => setFile(undefined)}
            >
              <Input type="hidden" name="image" value={imagePath} />
              <Input type="text" name="title" placeholder="Enter Post Title" />
              <textarea
                required
                name="description"
                rows={10}
                placeholder="Write Post Here..."
                className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5"
              ></textarea>
              <select
                name="category"
                required
                className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5"
                defaultValue="ChooseTag"
              >
                <option value="ChooseTag" disabled>
                  Choose Tag
                </option>
                <option value="Adventure">Adventure</option>
                <option value="Culture">Culture</option>
                <option value="Journey">Journey</option>
                <option value="Discovery">Discovery</option>
                <option value="Wonderlust">Wonderlust</option>
              </select>
              <Input name="userEmail" type="hidden" value={user.email || ''} />
              <Button type="submit" text="Create" aria="Create Blog" />
            </Form>
          </>
        )}
      </div>
    </div>
  )
}
