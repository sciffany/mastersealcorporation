import { blogPosts } from "@/app/lib/data";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Navigation from "@/app/components/Navigation";
import Image from "next/image";
import BlogContent from "@/app/components/BlogContent";
import { notFound } from "next/navigation";
import ContactUs from "@/app/components/ContactUs";
export const dynamic = "force-static";
export const dynamicParams = false; // only build known paths

export async function generateStaticParams() {
  return blogPosts.map((blog) => ({
    blog: blog.slug,
  }));
}

type BlogParams = { params: { blog: string } };

export async function generateMetadata({
  params,
}: BlogParams): Promise<Metadata> {
  return {
    alternates: {
      canonical: `/post/${params.blog}`,
    },
  };
}

export default function BlogPage({ params }: BlogParams) {
  const blog = blogPosts.find((blog) => blog.slug === params.blog);

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <Navigation />
      <BlogContent blog={blog} />
      <ContactUs />
    </div>
  );
}
