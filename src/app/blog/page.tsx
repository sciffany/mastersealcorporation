import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Navigation from "../components/Navigation";
import { blogPosts, meta } from "../lib/data";
import Link from "next/link";
import Image from "next/image";
import ContactUs from "../components/ContactUs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    (meta as Record<string, any>)["blogs"]?.description ||
    "Read helpful posts from Masterseal Corporation.",
  alternates: { canonical: "/blog" },
};

export default function Blogs() {
  return (
    <div>
      <Navigation />
      <section className='py-36 bg-white'>
        <h1 className='text-3xl font-semibold text-center text-black'>Blogs</h1>
        <p className='text-lg text-center text-black mt-3'>
          Read helpful posts from Masterseal Corporation.
        </p>
        <div className='container mx-auto px-6 lg:px-32 py-6'>
          <div className='flex flex-col gap-6'>
            {blogPosts.map((blog) => (
              <Link
                href={`/post/${blog.slug}`}
                key={blog.slug}
                className='block group'
              >
                <article className='w-full border rounded-xl overflow-hidden shadow-sm bg-white transition-shadow group-hover:shadow-md'>
                  <div className='flex flex-col md:flex-row'>
                    <div className='relative w-full md:w-80 h-64 shrink-0'>
                      <Image
                        src={blog.image || blog.inlineImage || ""}
                        alt={blog.title}
                        fill
                        sizes='(min-width: 768px) 320px, 100vw'
                        className='object-cover'
                      />
                    </div>
                    <div className='p-4 md:p-6 flex-1'>
                      <p className='text-sm text-gray-500 mb-3'>
                        {blog.date} • {blog.time} min read • {blog.author}
                      </p>
                      <h2 className='text-2xl font-semibold mb-6 text-black'>
                        {blog.title}
                      </h2>
                      <div
                        style={{
                          color: "black",
                          lineClamp: 5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm, remarkBreaks]}
                          components={{
                            ol: ({ children, ...props }) => (
                              <ol className='list-decimal pl-6' {...props}>
                                {children}
                              </ol>
                            ),
                            ul: ({ children, ...props }) => (
                              <ul className='list-disc pl-6' {...props}>
                                {children}
                              </ul>
                            ),
                            li: ({ children, ...props }) => (
                              <li className='mb-1' {...props}>
                                {children}
                              </li>
                            ),
                            p: ({ children, ...props }) => (
                              <p className='mb-3' {...props}>
                                {children}
                              </p>
                            ),
                            hr: (props) => (
                              <hr className='my-6 border-gray-300' {...props} />
                            ),
                          }}
                        >
                          {(blog.content || "").replace(/\[image\]/g, "")}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}
