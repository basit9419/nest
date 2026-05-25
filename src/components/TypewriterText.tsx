"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  /** Changes reset the animation */
  animationKey: string | number;
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export default function TypewriterText({
  animationKey,
  text,
  speed = 32,
  delay = 0,
  className = "",
  onComplete,
  showCursor = true,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setDisplayed("");
    setIsTyping(true);

    let intervalId: ReturnType<typeof setInterval> | undefined;
    const delayId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setIsTyping(false);
          onCompleteRef.current?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(delayId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [animationKey, text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && isTyping && (
        <span
          className="inline-block w-[3px] h-[0.9em] bg-brand-accent ml-0.5 align-middle animate-pulse"
          aria-hidden
        />
      )}
    </span>
  );
}
