import { RichText } from "basehub/react-rich-text";
import { CodeBlock } from "basehub/react-code-block";
import CoverImage from "@/app/components/cover-image";
import Avatar from "@/app/components/avatar";
import Date from "@/app/components/date";
import { BodyImage } from "./body-image";
import { fragmentOn } from "basehub";
import { PostMetaFragment } from "./hero-post";

export const PostFragment = fragmentOn("PostsItem", {
  ...PostMetaFragment,
  body: { json: { content: true } },
});

export type PostFragment = fragmentOn.infer<typeof PostFragment>;

export function Post({ _title, author, date, coverImage, body }: PostFragment) {
  return (
    <article>
      <h1 className="mb-4 text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-left md:text-5xl lg:text-6xl">
        {_title}
      </h1>

      <div className="hidden md:flex md:items-center md:gap-3 md:mb-4">
        {author && <Avatar title={author._title} url={author.avatar.url} />}
        <div className="text-sm dark:text-white/60 text-black/60">
          <Date dateString={date} />
        </div>
      </div>

      <div className="mb-6 sm:mx-0 md:mb-10">
        <CoverImage title={_title} url={coverImage.url} size="full" />
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center gap-3 block md:hidden">
          {author && <Avatar title={author._title} url={author.avatar.url} />}
          <div className="text-sm dark:text-white/60 text-black/60">
            <Date dateString={date} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="prose prose-sm sm:prose-base dark:prose-invert hover:prose-a:text-orange-500">
          <RichText
            components={{
              img: (props) => <BodyImage {...props} />,
              pre: ({ code, language }) => (
                <CodeBlock theme="slack-dark" snippets={[{ code, language }]} />
              ),
            }}
          >
            {body.json.content}
          </RichText>
        </div>
      </div>
    </article>
  );
}
