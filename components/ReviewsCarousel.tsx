"use client";

import { ReviewCard } from "@/components/ReviewCard";
import type { GoogleReview } from "@/lib/google-reviews";

function buildLoop(reviews: GoogleReview[]): GoogleReview[] {
  if (reviews.length === 0) return [];

  const base = [...reviews];
  while (base.length < 6) {
    base.push(...reviews);
  }

  return [...base, ...base];
}

export function ReviewsCarousel({ reviews }: { reviews: GoogleReview[] }) {
  const loopedReviews = buildLoop(reviews);

  return (
    <div className="google-reviews-carousel">
      <div className="google-reviews-track-inner">
        {loopedReviews.map((review, index) => (
          <ReviewCard
            key={`${review.authorName}-${index}`}
            {...review}
          />
        ))}
      </div>
    </div>
  );
}
