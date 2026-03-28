import { cache } from "react";

import apiClient from "./api-client";
import { getSocialMedia } from "./api-link";
import { SocialMediaInterface, socialMediaLinksFormat } from "../helper/dataFormat";

export const getSocialMediaLinks = cache(async (): Promise<SocialMediaInterface[]> => {
    try {
        // const response = await apiClient.get(getSocialMedia);
        return socialMediaLinksFormat();
    } catch (error) {
        console.error("Error fetching social media links:", error);
        throw error;
    }
});
