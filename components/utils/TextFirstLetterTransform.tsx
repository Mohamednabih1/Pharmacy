"use client";

import { noto_serif } from "@/lib/fonts";
import React from "react";

export default function TextFirstLetterTransform({
  strText,
}: {
  strText: string;
}) {
  const textWords: string[] = strText.split(" ");

  return (
    <p
      className={`px-4 sm:px-6 lg:px-8 ${noto_serif.className} font-[200] uppercase text-center text-3xl sm:text-4xl 2xl:text-8xl`}
    >
      {Array.from({ length: textWords.length }, (_, i) => (
        <React.Fragment key={i}>
          <span className="inline-block first-letter:text-4xl sm:first-letter:text-5xl 2xl:first-letter:text-9xl">
            {`${textWords[i]}`}
          </span>
          {i !== textWords.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </p>
  );
}
