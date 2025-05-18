import BlogCard from "@/app/(client)/_components/_blogs/blog-card";
import React from "react";
import CreativeCard from "../../_components/blog-card";

export default function RelatedBlogs() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="mb-4 text-[42px] text-center">Related Articals</h2>
        <p className="w-1/2 text-center mx-auto">
          Great content with your branding at very affordable rates. We handle
          the visuals, captions, and hashtags.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 md:my-[120px]">
        <CreativeCard
          image="https://img.freepik.com/free-photo/congratulations-you-did-test-very-well_637285-8618.jpg?ga=GA1.1.1363655190.1746773733&semt=ais_hybrid&w=740"
          date="January 27, 2025"
          readTime="5 min read"
          title="Discover 12+ Creative Contest Ideas And Examples"
          description="Learn the latest tips and tricks for posting on Pinterest in 2023 with our comprehensive guide."
          href="/blog/creative-contest-ideas"
        />
        <CreativeCard
          image="https://img.freepik.com/free-photo/congratulations-you-did-test-very-well_637285-8618.jpg?ga=GA1.1.1363655190.1746773733&semt=ais_hybrid&w=740"
          date="January 27, 2025"
          readTime="5 min read"
          title="Discover 12+ Creative Contest Ideas And Examples"
          description="Learn the latest tips and tricks for posting on Pinterest in 2023 with our comprehensive guide."
          href="/blog/creative-contest-ideas"
        />
        <CreativeCard
          image="https://img.freepik.com/free-photo/congratulations-you-did-test-very-well_637285-8618.jpg?ga=GA1.1.1363655190.1746773733&semt=ais_hybrid&w=740"
          date="January 27, 2025"
          readTime="5 min read"
          title="Discover 12+ Creative Contest Ideas And Examples"
          description="Learn the latest tips and tricks for posting on Pinterest in 2023 with our comprehensive guide."
          href="/blog/creative-contest-ideas"
        />
      </div>
    </section>
  );
}
