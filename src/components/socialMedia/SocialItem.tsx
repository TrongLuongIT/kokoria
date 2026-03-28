"use client";

import Image from "next/image";

interface SocialItemProps {
  url: string;
  key: number;
  videoUrl?: string;
}

export default function SocialItem({ url, key, videoUrl }: SocialItemProps) {
  return (
    <div className="col-6 col-md-3 mt-3" key={key }>
      <Image
        src={url}
        alt={`Social media thumbnail ${key + 1}`}
        layout="responsive"
        sizes="100vw"
        className="object-fit-cover w-100 shadow-lg"
        width={0}
        height={0}
      />
    </div>
  );
}