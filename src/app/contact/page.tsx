import ContactForm from "./component/contactForm";
import StoreInfor from "./component/storeInfor";
import BrandReason from "./component/brandReason";
import BranchStory from "./component/branchStory";

export default function ContactPage() {
  return (
    <>
      <BranchStory />
      
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <StoreInfor />
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <BrandReason />
    </>
  );
}