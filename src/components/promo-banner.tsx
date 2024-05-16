import Image, { ImageProps } from "next/image";

interface PromoBannerProps {}

export function PromoBanner(props: ImageProps) {
  return (
    <Image      
      width={0}
      height={0}
      className="h-auto w-full object-contain"
      sizes="100vh"
      quality={100}
      {...props}
    />
  );
}
