"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex justify-center gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mb-8">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}