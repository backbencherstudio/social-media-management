"use client"

import { useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"

type Category = {
  id: string
  name: string
}

interface CategorySelectorProps {
  categories: Category[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function CategorySelector({ categories, activeCategory, setActiveCategory }: CategorySelectorProps) {
  const [navigationClick, setNavigationClick] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap()
      setSelectedIndex(index)
    }

    emblaApi.on("select", onSelect)
    onSelect() // Run once on mount

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    setNavigationClick(true)
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  return (
    <div className="overflow-hidden relative" ref={emblaRef}>
      <div className="flex space-x-2 py-4">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            onClick={() => {
              setActiveCategory(category.name)
            }}
            className={cn(
              "rounded-full border px-5 py-2 text-base cursor-pointer leading-[150%] tracking-[.16px] ",
              activeCategory === category.name
                ? "bg-black text-white font-medium border-black "
                : "bg-white text-black font-normal border-gray-200 hover:bg-gray-100 ",
            )}
          >
            {category.name}
          </Button>
        ))}
      </div>
      {selectedIndex > 0 && (
        <button
          className={`${navigationClick ? "flex" : "hidden"} cursor-pointer absolute top-1/2 left-0 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white hover:bg-amber-100`}
          onClick={scrollPrev}
        >
          <IoIosArrowBack className="text-2xl" />
        </button>
      )}

      {emblaApi && selectedIndex < emblaApi.scrollSnapList().length - 1 && (
        <button
          className="cursor-pointer absolute z-50 top-1/2 right-0 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white hover:bg-amber-100"
          onClick={scrollNext}
        >
          <IoIosArrowForward className="text-2xl" />
        </button>
      )}

      {emblaApi && selectedIndex < emblaApi.scrollSnapList().length - 1 && (
        <div
          className="absolute top-0 right-0 h-full w-24 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, #F7F7F9 53.76%, rgba(247, 247, 249, 0.00) 100%)",
          }}
        ></div>
      )}
    </div>
  )
}
