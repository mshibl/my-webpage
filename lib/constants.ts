export const EXAMPLE_PATH = "cms-basehub";
export const CMS_NAME = "BaseHub";
export const CMS_URL = "https://basehub.com";

// Get the absolute URL for Open Graph images
export function getAbsoluteUrl(path: string = ""): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
  return `${baseUrl}${path}`;
}
