"use client";

import { blogPosts } from "@/app/lib/data";
import ReactMarkdown from "react-markdown";
import Navigation from "@/app/components/Navigation";
import Image from "next/image";
import BlogContent from "@/app/components/BlogContent";

export default function BlogPage({ params }: { params: { blog: string } }) {
  const blog = blogPosts.find((blog) => blog.slug === params.blog);

  return (
    <div>
      <Navigation />
      <BlogContent blog={blog} />
    </div>
  );
}
