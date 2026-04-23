"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileImage() {
  const [src, setSrc] = useState("/photo.jpg");

  return (
    <Image
      src={src}
      alt="Surya Khandavilli"
      fill
      className="object-cover"
      priority
      onError={() =>
        setSrc(
          "https://ui-avatars.com/api/?name=Surya+Khandavilli&size=144&background=1e3a5f&color=e0e6f0&bold=true"
        )
      }
    />
  );
}
