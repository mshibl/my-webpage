import { PostPreview } from "./post-preview";
import { PostMetaFragment } from "./hero-post";

export function AllPosts({
  allPosts,
  // title,
}: {
  allPosts: PostMetaFragment[];
  // title: React.ReactNode;
}) {
  return (
    <section>
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title}
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 mb-12 auto-rows-fr">
        {allPosts.map((post) => {
          return <PostPreview key={post._id} {...post} />;
        })}
      </div>
    </section>
  );
}
