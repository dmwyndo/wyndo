import { site } from "@/lib/site";

export type GoogleReview = {
  authorName: string;
  profilePhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime?: string;
  authorUrl?: string | null;
};

export type GoogleReviewsData = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
  source: "google" | "fallback";
};

type LegacyReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

type LegacyPlaceDetailsResponse = {
  status?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: LegacyReview[];
  };
};

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    authorName: "Recent Customer",
    profilePhotoUrl: null,
    rating: 5,
    text: "Impressed from the sales visit through the scheduling, the install, and the follow-up. The crew was quick, efficient, and polite — they even vacuumed under every window when they finished.",
  },
  {
    authorName: "Boise Homeowner",
    profilePhotoUrl: null,
    rating: 5,
    text: "All sixteen of our windows were installed in a single day. Communication was great the whole way through and they cleaned up after themselves. Already loving the new windows.",
  },
  {
    authorName: "DFW Property Manager",
    profilePhotoUrl: null,
    rating: 5,
    text: "Wyndo handled our storefront replacement on schedule and kept us informed throughout. Minimal disruption to our daily operations.",
  },
  {
    authorName: "Idaho Falls Resident",
    profilePhotoUrl: null,
    rating: 5,
    text: "They explained everything in plain terms and never tried to upsell us. Clear communication from the first call through the final install.",
  },
  {
    authorName: "Salt Lake Homeowner",
    profilePhotoUrl: null,
    rating: 5,
    text: "The house looks and feels completely different inside and out. The whole process was smooth, and everyone we dealt with was professional and courteous.",
  },
  {
    authorName: "Detroit Homeowner",
    profilePhotoUrl: null,
    rating: 5,
    text: "The quality of these windows is phenomenal, and the install team took the extra time to get every detail right. Warranties you can actually count on.",
  },
];

const FALLBACK_DATA: GoogleReviewsData = {
  rating: 5,
  reviewCount: 120,
  reviews: FALLBACK_REVIEWS,
  source: "fallback",
};

function getApiKey() {
  return process.env.GOOGLE_PLACES_API_KEY;
}

function mapReviews(reviews: LegacyReview[] | undefined): GoogleReview[] {
  return (reviews ?? [])
    .filter((review) => review.text && review.author_name)
    .map((review) => ({
      authorName: review.author_name!,
      profilePhotoUrl: review.profile_photo_url ?? null,
      rating: review.rating ?? 5,
      text: review.text!,
      relativeTime: review.relative_time_description,
      authorUrl: review.author_url ?? null,
    }));
}

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = getApiKey();
  if (!apiKey || !site.googlePlaceId) return FALLBACK_DATA;

  try {
    const params = new URLSearchParams({
      place_id: site.googlePlaceId,
      fields: "rating,user_ratings_total,reviews",
      key: apiKey,
    });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
      { next: { revalidate: 60 * 60 * 6 } },
    );

    if (!response.ok) return FALLBACK_DATA;

    const data = (await response.json()) as LegacyPlaceDetailsResponse;
    if (data.status !== "OK" || !data.result) return FALLBACK_DATA;

    const reviews = mapReviews(data.result.reviews);
    if (reviews.length === 0) return FALLBACK_DATA;

    return {
      rating: data.result.rating ?? FALLBACK_DATA.rating,
      reviewCount: data.result.user_ratings_total ?? FALLBACK_DATA.reviewCount,
      reviews,
      source: "google",
    };
  } catch {
    return FALLBACK_DATA;
  }
}
