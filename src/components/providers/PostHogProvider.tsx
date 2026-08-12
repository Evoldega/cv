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
    const {
      NEXT_PUBLIC_POSTHOG_KEY,
      NEXT_PUBLIC_POSTHOG_HOST
    } = process.env;

    if (
      NEXT_PUBLIC_POSTHOG_KEY &&
      NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.init(NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: true,
      });

      posthog.register({
        locale,
      });     
    } else {
      console.log("PostHog: environment variables are not declared.")
    }

  }, [locale]);

  return children;
}