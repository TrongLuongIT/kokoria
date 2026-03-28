import { getSocialMediaLinks } from "@/src/services/social-service";
import SocialItem from "./SocialItem";
import ImageCard from "../common/ImageCard";

export default async function SocialList() {

  const socialList = await getSocialMediaLinks();
  return (
    <div className="row">
      {socialList.map((social, index) => (
        <div className="col-6 col-md-3 mt-3" key={index}>
          <ImageCard 
            src={social.thumbnail}
            alt={`Social media thumbnail ${index + 1}`}
            ratio="9/16"
          />
        </div>
      ))}
    </div>
  );
}