import { Suspense } from "react";

import ProductList from "@/src/components/products/ProductList";
import ImageSlider from "@/src/components/common/ImageSlider";
import SocialList from "@/src/components/socialMedia/SocialList";

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
      <div className="p-0">
        <ImageSlider images={MOCK_SLIDE_IMAGE} />
      </div>

      <div className="title-category">Danh mục sản phẩm</div>
      <div className="container">
        <Suspense fallback={<ProductSkeleton />}>
          <ProductList />
        </Suspense>
      </div>

      <div className="title-category mt-4">Thông tin Kokoria</div>
      <div className="container">
        <SocialList />
      </div>

      
      <div className="container mt-3">
        <div className="text-center ratio ratio-1x1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.9976264987912!2d106.67412225666409!3d10.771144991658767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ff067f8673d%3A0x1cd441dc210a95a0!2sKokoria!5e0!3m2!1svi!2s!4v1774283043753!5m2!1svi!2s" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
}
