"use client";

import {useEffect} from "react";
import posthog from "posthog-js";

export function PostHogProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: true,
    });

    posthog.register({
      locale,
    });
  }, [locale]);

  return children;
}