"use client";

import { useEffect } from "react";

const allowedThemes = ["classic", "white-gold"] as const;

type ThemeName = (typeof allowedThemes)[number];

function isTheme(value: string | null): value is ThemeName {
  return allowedThemes.includes(value as ThemeName);
}

export function ThemeController() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const themeFromUrl = params.get("theme");

    if (isTheme(themeFromUrl)) {
      document.documentElement.dataset.theme = themeFromUrl;
      window.localStorage.setItem("market-ingross-theme", themeFromUrl);
      return;
    }

    const savedTheme = window.localStorage.getItem("market-ingross-theme");

    if (isTheme(savedTheme)) {
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  return null;
}
