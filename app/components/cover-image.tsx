import { clsx } from "clsx";
import { BaseHubImage } from "basehub/next-image";

export default function CoverImage({
  title,
  url,
  size = "full",
}: {
  title: string;
  url: string;
  size?: "full" | "preview";
}) {
  const image = (
    <BaseHubImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={clsx("w-full h-full object-cover", {
        "rounded-lg": size === "preview",
        "shadow-sm rounded-lg": size === "full",
        "group-hover:scale-105 transition-transform duration-300": size === "preview",
        "hover:shadow-md transition-shadow duration-200": size === "full",
        "max-w-4xl": size === "full",
      })}
      src={url}
    />
  );

  return (
    <div className={clsx("sm:mx-0", { "w-full h-full absolute inset-0": size === "preview" })}>
      {image}
    </div>
  );
}
