import { Blog, blogPosts } from "../lib/data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Link from "next/link";
import Image from "next/image";

export default function BlogContent({ blog }: { blog: Blog }) {
  return (
    <section className='px-6 lg:px-28 bg-purple-100 pb-48'>
      <div className='py-10 pt-32 mx-6 lg:mx-20'>
        <nav className='text-sm text-gray-600'>
          <Link href='/blog' className='hover:underline'>
            Blog
          </Link>
          <span className='mx-2'>/</span>
          <span className='text-gray-800'>{blog?.title}</span>
        </nav>
      </div>
      <div className='bg-white px-6 lg:px-32 py-20 lg:mx-20 border rounded-xl'>
        <div className='container text-black'>
          <p className='text-sm text-gray-500 mb-3'>
            {blog?.date} • {blog?.time} min read • {blog?.author}
          </p>
          <h1 className='text-4xl font-bold text-black'>{blog?.title}</h1>
        </div>

        {blog?.image && (
          <Image
            key={blog?.image}
            src={blog?.image || ""}
            alt={blog?.title || ""}
            width={500}
            height={500}
            className='rounded-lg mt-10'
          />
        )}
        <div className='py-6 text-lg text-black'>
          {(() => {
            const rawContent = blog?.content || "";
            const contentWithImages = blog?.inlineImage
              ? rawContent.replace(
                  /\[image\]/g,
                  `![${blog?.title || ""}](${blog?.inlineImage})`
                )
              : rawContent.replace(/\[image\]/g, "");

            return (
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
                    <p className='mb-4' {...props}>
                      {children}
                    </p>
                  ),
                  hr: (props) => (
                    <hr className='my-8 border-gray-300' {...props} />
                  ),
                  img: ({ src, alt }) => (
                    <div className='flex flex-col items-center'>
                      <Image
                        src={src || ""}
                        alt={alt || blog?.title || ""}
                        width={500}
                        height={500}
                        className='rounded-lg'
                      />
                      {blog?.caption && (
                        <p className='text-sm text-gray-500 mt-2'>
                          {blog?.caption}
                        </p>
                      )}
                    </div>
                  ),
                }}
              >
                {contentWithImages}
              </ReactMarkdown>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
