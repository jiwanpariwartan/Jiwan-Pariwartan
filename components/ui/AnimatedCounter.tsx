"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  language?: "en" | "np";
}

const toNepaliDigits = (num: number) => {
  return num.toString().replace(/\d/g, (d) => "०१२३४५६७८९"[Number(d)]);
};

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  language = "en",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const animatedRef = useRef(false);

  // Add this useEffect
  useEffect(() => {
    if (count === target) {
      // Force update display when language changes after animation
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(target);
    }
  }, [language, target, count]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (inView && !animatedRef.current) {
      animatedRef.current = true;

      const increment = target / (duration / 16);
      let current = 0;

      timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
    }

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  // Final display value
  const displayValue = language === "np" ? toNepaliDigits(count) : count;

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
