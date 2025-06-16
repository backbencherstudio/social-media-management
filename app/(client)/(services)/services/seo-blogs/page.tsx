import React from "react";
import BlogContent from "./_components/blog-content";
import ProcessWorks from "./_components/process-works";
import SeoContent from "./_components/seo-content";
import BlogPost from "./_components/blog-post";

export default function page() {
  return (
    <div>
      <BlogContent />
      <ProcessWorks />
      <SeoContent/>
      <BlogPost/>
    </div>
  );
}
