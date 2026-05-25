"use client";

import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteMarquee({
  children,
  speed = "normal",
  pauseOnHover = true,
  className = "",
}: InfiniteMarqueeProps) {
  const duration =
    speed === "slow" ? "40s" : speed === "fast" ? "18s" : "28s";

  return (
    <div
      className={`overflow-hidden ${pauseOnHover ? "group" : ""} ${className}`}
    >
      <div
        className={`flex w-max marquee-track ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: duration }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
