"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export interface ProductItemProps {
  product: {
    id: number;
    name: string;
    image: string;
  };
}

export default function ProductItem({ product }: ProductItemProps){

  const router = useRouter();

  const onClickMenu = () => {
    router.push("/about");
  }

  return (
    <div className="col-6 col-md-3 mt-4" key={product.id}>
      <div className="box-shadow pointer" onClick={onClickMenu}>
        <Image
          src={product.image}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="title-product p-2 text-truncate" title={product.name}>{product.name}</div>
      </div>
    </div>
  )
}