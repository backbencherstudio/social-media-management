// import CreativeCard from "./blog-card";
import SocialMediaTabs from "./tabs";

export default function AllBlogs() {


  return (
    <main className="flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Featured Content
        </h1>
        <SocialMediaTabs />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CreativeCard
            image="https://img.freepik.com/free-photo/congratulations-you-did-test-very-well_637285-8618.jpg?ga=GA1.1.1363655190.1746773733&semt=ais_hybrid&w=740"
            date="January 27, 2025"
            readTime="5 min read"
            title="Discover 12+ Creative Contest Ideas And Examples"
            description="Learn the latest tips and tricks for posting on Pinterest in 2023 with our comprehensive guide."
            href="/blog/creative-contest-ideas"
          ></CreativeCard>
        </div> */}
      </div>
    </main>
  );
}
