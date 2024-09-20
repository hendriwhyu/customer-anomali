import React from 'react';
import { type ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

type TypographyProps = {
    text: string | number;
    className?: ClassValue;
};

export function TypographyH1({ text, className }: TypographyProps) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
      {text}
    </h1>
  );
}

export function TypographyH2({ text, className }: TypographyProps) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {text}
    </h2>
  );
}

export function TypographyH3({ text, className }: TypographyProps) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
      {text}
    </h3>
  );
}

export function TypographyH4({ text, className }: TypographyProps) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {text}
    </h4>
  );
}

export function TypographyP({ text, className }: TypographyProps) {
  return (
    <p className={cn("leading-7", className)}>
      {text}
    </p>
  );
}

export function TypographyBlockquote({ text, className }: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {text}
    </blockquote>
  );
}
