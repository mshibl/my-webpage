import { BaseHubImage } from "basehub/next-image";

export default function Avatar({ title, url }: { title: string; url: string }) {
  return (
    <div className="flex items-center">
      <div className="mr-3 w-10 h-10">
        <BaseHubImage
          alt={title}
          className="object-cover h-full rounded-full"
          height={96}
          width={96}
          src={url}
        />
      </div>
      <div className="text-sm font-semibold tracking-wide">{title}</div>
    </div>
  );
}
