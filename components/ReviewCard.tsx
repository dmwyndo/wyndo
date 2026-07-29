import Image from "next/image";
import type { GoogleReview } from "@/lib/google-reviews";
import { site } from "@/lib/site";

const AVATAR_COLORS = [
  "#c97b84",
  "#9a7b5c",
  "#6b8cae",
  "#7a9e7e",
  "#8b7cae",
  "#ae8b6b",
] as const;

function avatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function StarRating({ rating }: { rating: number }) {
  const filled = Math.round(rating);

  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" aria-hidden>
          <path
            d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z"
            fill={index < filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewAvatar({
  name,
  photoUrl,
}: {
  name: string;
  photoUrl: string | null;
}) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="review-avatar">
      {photoUrl ? (
        <Image
          src={photoUrl}
          alt=""
          width={48}
          height={48}
          className="review-avatar-img"
        />
      ) : (
        <span
          className="review-avatar-fallback"
          style={{ backgroundColor: avatarColor(name) }}
          aria-hidden
        >
          {initial}
        </span>
      )}
    </div>
  );
}

export function ReviewCard({
  authorName,
  profilePhotoUrl,
  rating,
  text,
  authorUrl,
}: GoogleReview) {
  const readMoreHref = authorUrl ?? site.links.google;
  const showReadMore = text.length > 140;

  return (
    <article className="review-card">
      <span className="review-quote-mark" aria-hidden>
        “
      </span>
      <div className="review-card-head">
        <ReviewAvatar name={authorName} photoUrl={profilePhotoUrl} />
        <div>
          <p className="review-author">{authorName}</p>
          <p className="review-source">Google Review</p>
        </div>
      </div>
      <StarRating rating={rating} />
      <div className="review-body">
        <p className="review-text">{text}</p>
        {showReadMore ? (
          <a
            className="review-read-more"
            href={readMoreHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        ) : null}
      </div>
    </article>
  );
}
