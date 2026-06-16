"use client";

import { useState, useEffect } from "react";

interface AnimatedParagraphProps {
  text: string;
  className?: string;
  highlightClassName?: string;
  duration?: number; // in milliseconds
}

export default function AnimatedParagraph({
  text,
  className,
  highlightClassName = "font-bold text-yellow-400",
  duration = 1000,
}: AnimatedParagraphProps) {
  // Split the text into an array of words
  const words = text.split(" ");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    // Set up an interval that runs based on the duration prop
    const interval = setInterval(() => {
      // Pick a random index
      let randomIndex = Math.floor(Math.random() * words.length);

      // Optional: Prevent picking the exact same word twice in a row
      while (randomIndex === activeIndex && words.length > 1) {
        randomIndex = Math.floor(Math.random() * words.length);
      }

      setActiveIndex(randomIndex);
    }, duration);

    // Clean up the interval when the component unmounts or duration changes
    return () => clearInterval(interval);
  }, [activeIndex, words.length, duration]);

  return (
    <p className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`transition-colors duration-300 ease-in-out ${
            index === activeIndex
              ? highlightClassName // Apply the custom highlight class
              : "font-normal text-inherit" // The normal state
          }`}
        >
          {/* Render the word + a forced space so they don't stick together */}
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
