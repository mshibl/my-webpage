import Link from "next/link";
// import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import { PostMetaFragment } from "./hero-post";

export function PostPreview({
  _title,
  coverImage,
  date,
  excerpt,
  // author,
  _slug,
}: PostMetaFragment) {
  return (
    <Link href={`/posts/${_slug}`} className="flex flex-col h-full group">
      <article className="flex flex-col h-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 bg-white dark:bg-gray-900 hover:shadow-md">
        <div className="overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[16/9] w-full relative">
          <CoverImage title={_title} url={coverImage.url} size="preview" />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight line-clamp-2 group-hover:text-orange-500 transition-colors">
            {_title}
          </h3>
          <div className="text-xs dark:text-white/50 text-black/50 mb-3">
            <Date dateString={date} />
          </div>
          <p className="text-sm leading-relaxed text-black/70 dark:text-white/70 line-clamp-3">
            {excerpt}
          </p>
        </div>
      </article>
      {/* {author && <Avatar title={author._title} url={author.avatar.url} />} */}
    </Link>
  );
}
