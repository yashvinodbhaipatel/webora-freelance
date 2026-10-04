import PageAbout from "./page-about";
import PageCareers from "./page-careers";
import PageContact from "./page-contact";
import PageIndex from "./page-index";
import PageInsightConnectedBrand from "./page-insight-connected-brand";
import PageInsightContentWithPurpose from "./page-insight-content-with-purpose";
import PageInsightWebsiteBrief from "./page-insight-website-brief";
import PageInsights from "./page-insights";
import PagePrivacy from "./page-privacy";
import PageService3DMapDesign from "./page-service-3d-map-design";
import PageServiceInfluencerMarketing from "./page-service-influencer-marketing";
import PageServiceMobileApps from "./page-service-mobile-apps";
import PageServicePerformanceMarketing from "./page-service-performance-marketing";
import PageServiceShopify from "./page-service-shopify";
import PageServiceUgcContent from "./page-service-ugc-content";
import PageServiceWebDesign from "./page-service-web-design";
import PageServices from "./page-services";
import PageTechnology from "./page-technology";
import PageWorkDayOff from "./page-work-day-off";
import PageWorkForma from "./page-work-forma";
import PageWorkNewPerspectives from "./page-work-new-perspectives";
import PageWorkPace from "./page-work-pace";
import PageWorkSundaySupply from "./page-work-sunday-supply";
import PageWork from "./page-work";
export const pages = {
"about": PageAbout,
"careers": PageCareers,
"contact": PageContact,
"index": PageIndex,
"insight-connected-brand": PageInsightConnectedBrand,
"insight-content-with-purpose": PageInsightContentWithPurpose,
"insight-website-brief": PageInsightWebsiteBrief,
"insights": PageInsights,
"privacy": PagePrivacy,
"service-3d-map-design": PageService3DMapDesign,
"service-influencer-marketing": PageServiceInfluencerMarketing,
"service-mobile-apps": PageServiceMobileApps,
"service-performance-marketing": PageServicePerformanceMarketing,
"service-shopify": PageServiceShopify,
"service-ugc-content": PageServiceUgcContent,
"service-web-design": PageServiceWebDesign,
"services": PageServices,
"technology": PageTechnology,
"work-day-off": PageWorkDayOff,
"work-forma": PageWorkForma,
"work-new-perspectives": PageWorkNewPerspectives,
"work-pace": PageWorkPace,
"work-sunday-supply": PageWorkSundaySupply,
"work": PageWork
};
export type PageName = keyof typeof pages;
