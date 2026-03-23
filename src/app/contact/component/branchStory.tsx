
import ImageMarquee from "@/src/components/common/ImageMarquee";
import { MOCK_BRANCH_IMAGES } from  "@/src/services/product-service";

export default function BranchStory() {
  return (
    <div className="container-fluid bg-black py-5">
      <div className="text-white text-center title-brand-1">
        Our story. <br/>
        Chúng tôi là ai ? <br/>
        Chúng tôi cung cấp những gì ?<br/>
      </div>
      <div className="text-white text-center pb-5 pt-4">Hình ảnh cửa hàng</div>
      <ImageMarquee images={MOCK_BRANCH_IMAGES}/>
    </div>
  );
}
