import { Reveal } from "@/components/Reveal";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { getGoogleReviews } from "@/lib/google-reviews";
import { site } from "@/lib/site";

export async function GoogleReviewsSection() {
  const { rating, reviewCount, reviews } = await getGoogleReviews();
  const ratingLabel = rating.toFixed(1);

  return (
    <section className="google-reviews" id="reviews">
      <div className="wrap">
        <Reveal className="google-reviews-head">
          <a
            className="google-rating-badge"
            href={site.links.google}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="google-rating-dot" aria-hidden />
            {ratingLabel} stars on Google
          </a>
          <h2 className="google-reviews-title">Google Reviews</h2>
          <p className="google-reviews-lead">
            See why people love {site.name}. Here&apos;s what they have to say.
          </p>
        </Reveal>
      </div>

      <Reveal className="google-reviews-track-wrap">
        <ReviewsCarousel reviews={reviews} />
      </Reveal>
    </section>
  );
}
