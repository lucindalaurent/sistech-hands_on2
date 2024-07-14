import Image from "next/image";
import React from "react";

type CardProps = {
  thumbnail: string;
  title: string;
  description: React.ReactNode;
};

function Card({ thumbnail, title, description }: CardProps) {
  return (
    <div className="card bg-invert">
        <Image src={thumbnail} alt={title} width={80} height={80} className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="mt-2">
            {description}
        </div>
    </div>
  );
}

export type { CardProps };
export { Card };