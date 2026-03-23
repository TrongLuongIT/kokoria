import { Suspense } from "react";
import Image from "next/image";

import ProductList from "@/src/components/products/productList";
import ImageSlider from "@/src/components/common/ImageSlider";

import { MOCK_SLIDE_IMAGE } from "@/src/services/product-service";

function ProductSkeleton(){
  return (
    <div className="row">
        {
          Array.from({length:8}).map((value, key) => (
            <div className="col-6 col-md-3" key={key}>
              <div className="box-shadow pointer" >
                <div className="aspect-square bg-gray-100 relative" style={{height: 100, width: 100}}>
                  <div className="object-cover w-full h-full bg-gray-300" />
                </div>
                <div className="title-product p-2">Day la title</div>
              </div>
            </div>
          ))
        }
      </div>
  );
}

export default function Home() {

  return (
    <>
      {/* <div className="pointer">
        <Image 
          src="/images/layout/logo.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="logo"
        />
      </div> */}

      <div className="row">
        <div className="p-0">
          <ImageSlider images={MOCK_SLIDE_IMAGE} />
        </div>
      </div>

      <div className="title-category">Danh mục sản phẩm</div>
      <Suspense fallback={<ProductSkeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
}
