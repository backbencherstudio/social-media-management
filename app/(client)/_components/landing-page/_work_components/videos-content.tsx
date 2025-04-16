"use client"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX, AlertCircle } from "lucide-react"

import CategorySelector from "./category-selection"

type Category = {
  id: string
  name: string
}

interface VideosContentProps {
  categories: Category[]
  activeCategory: string
  setActiveCategory: (category: string) => void
  videoItems: { id: string; category: string; videoUrl: string }[]
}



export default function VideosContent({ categories, activeCategory, setActiveCategory,videoItems }: VideosContentProps) {

  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [videoErrors, setVideoErrors] = useState<{ [key: string]: boolean }>({})
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})



  // Filter videos based on active category
  const filteredVideos = videoItems.filter((item) => item.category === activeCategory)

  const playVideo = (videoId: string) => {
    // If there's an error with this video, don't try to play it
    if (videoErrors[videoId]) return

    // Stop currently playing video if there is one
    if (playingVideo && playingVideo !== videoId) {
      stopVideo(playingVideo)
    }

    const videoElement = videoRefs.current[videoId]
    if (videoElement) {
      videoElement.muted = isMuted

      // Use promise-based play() with error handling
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error)
        setVideoErrors((prev) => ({ ...prev, [videoId]: true }))
      })

      setPlayingVideo(videoId)
    }
  }

  const stopVideo = (videoId: string) => {
    const videoElement = videoRefs.current[videoId]
    if (videoElement) {
      videoElement.pause()
      videoElement.currentTime = 0
    }
    if (playingVideo === videoId) {
      setPlayingVideo(null)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (playingVideo) {
      const videoElement = videoRefs.current[playingVideo]
      if (videoElement) {
        videoElement.muted = !isMuted
      }
    }
  }

  const handleVideoError = (videoId: string) => {
    console.error(`Error loading video: ${videoId}`)
    setVideoErrors((prev) => ({ ...prev, [videoId]: true }))
    if (playingVideo === videoId) {
      setPlayingVideo(null)
    }
  }

  return (
    <>
      {/* Categories */}
      <CategorySelector categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {filteredVideos.map((video) => (
          <Card
            key={video.id}
            className="overflow-hidden py-0 gap-0 rounded-[8px] border-[1.28px] border-[#E9E9EA] bg-white shadow-[0px_12.8px_51.2px_0px_rgba(222,230,237,0.40)]"
          >
            {/* Video Player */}
            <div className="relative aspect-video   ">
              <video
                ref={(el) => {
                  videoRefs.current[video.id] = el;
                }}
                src={video.videoUrl}
                className="w-full h-[438px] object-cover"
                playsInline
                preload="metadata"
                onError={() => handleVideoError(video.id)}
                onClick={() => {
                  if (!videoErrors[video.id]) {
                    if (playingVideo === video.id) {
                      stopVideo(video.id)
                    } else {
                      playVideo(video.id)
                    }
                  }
                }}
              />

              {/* Error Message */}
              {videoErrors[video.id] && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
                  <AlertCircle className="h-10 w-10 mb-2" />
                  <p className="text-center px-4">Video could not be loaded</p>
                </div>
              )}

              {/* Play/Pause Button Overlay */}
              {!videoErrors[video.id] && playingVideo !== video.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="h-[64px] w-[64px] cursor-pointer bg-white bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
                    onClick={() => playVideo(video.id)}
                  >
                    <Play className="w-8 h-8 text-black fill-black" />
                  </button>
                </div>
              )}

              {/* Video Controls */}
              {!videoErrors[video.id] && playingVideo === video.id && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex justify-between items-center">
                  <button
                    className="w-8 h-8 bg-black/50 cursor-pointer rounded-full flex items-center justify-center hover:bg-black/70"
                    onClick={() => stopVideo(video.id)}
                  >
                    <Pause className="h-4 w-4 text-white" />
                  </button>

                  <button
                    className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
                  </button>
                </div>
              )}

              {/* Duration Badge */}
              {/* <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {video.duration}
              </div> */}
            </div>

            {/* Video Info */}
            {/* <div className="p-4">
              <h3 className="font-medium text-lg mb-2">{video.title}</h3>
              <p className="text-sm text-gray-500">{video.views} views</p>
            </div> */}
          </Card>
        ))}
      </div>
    </>
  )
}
