import { useState } from "react";
import { api } from "../../services/api";

interface ImageSkeletonProps {
  name: string;
  image: string;
  imageSize: string;
}

export function ImageSkeleton({ name, image, imageSize }: ImageSkeletonProps) {
  const [skeleton, setSkeleton] = useState(true);

  function handleSkeleton() {
    setSkeleton(false);
  }

  return (
    <div className="relative">
      {skeleton && (
        <div className="rounded-full absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-gray-500 bg-fixed opacity-90 animate-pulse"></div>
      )}
      <img
        className="h-full"
        style={{ width: imageSize === "small" ? "300px" : "384px" }}
        src={`${api.defaults.baseURL}/files/${image}`}
        alt={name}
        onLoad={handleSkeleton}
      />
    </div>
  );
}
