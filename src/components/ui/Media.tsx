import Image from "next/image";
import { cn } from "@/lib/cn";

interface MediaProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function Media({
  src,
  alt,
  aspectRatio = "16 / 10",
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: MediaProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-lg bg-border", className)}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
