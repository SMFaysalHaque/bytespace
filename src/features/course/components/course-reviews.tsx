import Image from "next/image";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { CourseRatingBar, CourseReview, CourseReviewsContent } from "@/types";

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className={cn(fonts.heading.className, "text-ink text-xl font-semibold tracking-[-0.2px]")}>
      {children}
    </h2>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: count }).map((_, index) => (
        <Image
          key={index}
          src="/images/icons/star-filled.svg"
          alt=""
          width={24}
          height={24}
          className="size-5 sm:size-6"
        />
      ))}
    </span>
  );
}

function RatingBar({ bar }: { bar: CourseRatingBar }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="bg-line h-2 min-w-0 flex-1 overflow-hidden rounded-3xl">
        <div className="bg-accent h-full rounded-3xl" style={{ width: `${bar.percent}%` }} />
      </div>
      <Stars count={5} />
      <span className="text-ink-muted w-10 shrink-0 text-right text-base">{bar.count}</span>
    </div>
  );
}

function RatingSummary({ reviews }: { reviews: CourseReviewsContent }) {
  return (
    <div className="border-shuttle-200 flex max-w-3xl flex-col gap-6 rounded-2xl border bg-white p-6 sm:flex-row sm:items-center sm:p-10">
      <div className="bg-accent text-ink flex flex-col items-center justify-center rounded-lg p-8 sm:p-10">
        <span className="text-sm font-medium">{reviews.ratingLabel}</span>
        <span className={cn(fonts.heading.className, "text-4xl font-semibold tracking-[-0.36px]")}>
          {reviews.averageRating}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {reviews.breakdown.map((bar, index) => (
          <RatingBar key={index} bar={bar} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: CourseReview }) {
  return (
    <article className="border-shuttle-200 flex max-w-3xl flex-col gap-6 rounded-3xl border bg-white p-6 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="relative size-13 shrink-0 overflow-hidden rounded-full">
              <Image src={review.avatar} alt={review.name} fill className="object-cover" />
            </span>
            <div className="flex flex-col">
              <span className="text-ink text-lg font-medium">{review.name}</span>
              <span className="text-ink-muted text-base">{review.role}</span>
            </div>
          </div>
          <Stars count={review.rating} />
        </div>
        <span className="text-ink-muted shrink-0 text-base whitespace-nowrap">
          {review.timeAgo}
        </span>
      </div>
      <p className="text-ink-muted text-base leading-relaxed">{review.text}</p>
    </article>
  );
}

export function CourseReviews({ reviews }: { reviews: CourseReviewsContent }) {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading>{reviews.heading}</SectionHeading>
      <p className="text-ink-muted max-w-3xl text-base leading-relaxed">{reviews.intro}</p>

      <RatingSummary reviews={reviews} />

      <SectionHeading>Individual Reviews:</SectionHeading>
      <div className="flex max-w-3xl flex-wrap gap-3 sm:gap-4">
        {reviews.ratingFilters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={cn(
              "flex items-center gap-1 rounded-3xl px-4 py-3 text-base font-medium transition-colors",
              index === 0 ? "bg-accent text-ink" : "bg-surface text-ink-muted hover:bg-surface/70",
            )}
          >
            {index !== 0 && (
              <Image
                src="/images/icons/star-filled.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            )}
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {reviews.reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </div>
  );
}
