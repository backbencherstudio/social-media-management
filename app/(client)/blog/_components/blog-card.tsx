"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"


interface CreativeCardProps {
  image: string
  date: string
  readTime: string
  title: string
  description: string
  href: string
}

export default function CreativeCard({ image, date, readTime, title, description, href = "#" }: CreativeCardProps) {
const router = useRouter()
const handleBlog = (id) => {
  router.push(`/blog/${id}`)
}

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg" onClick={() => handleBlog(1)
    }>
      <Link href="" className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>{date}</span>
            <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
            <span>{readTime}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </Link>
    </div>
  )
}
