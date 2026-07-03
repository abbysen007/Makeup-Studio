export interface BridalService {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  editorialDetails: string[];
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "bengali" | "royal" | "minimal_lux" | "reception" | "soft_dewy" | "traditional";
  imageUrl: string;
  makeupDetails: string[];
  skinSecret: string;
}

export interface BrideTestimonial {
  id: string;
  name: string;
  weddingLocation: string;
  weddingDate: string;
  vibe: string;
  quote: string;
  detailedStory: string;
  avatarUrl: string;
  instagramHandle: string;
}

export interface ConsultationResponse {
  vibeSummary: string;
  conceptDetail: string;
  skincareTimeline: {
    threeMonthsBefore: string;
    oneMonthBefore: string;
    oneWeekBefore: string;
    weddingDayOf: string;
  };
  productSourcingSuggestions: string[];
  lookAttributes: {
    skinFinish: string;
    eyeMakeupDetail: string;
    lipShadeRecommendation: string;
    blushAndHighlightTones: string;
  };
}
