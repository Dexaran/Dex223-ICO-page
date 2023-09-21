import React from "react";

export const svgIconsNames = [
  "error",
  "done",
  "info",
  "flag",
  "arrow-right",
  "arrow-left",
  "check",
  "soy-logo",
  "fight",
  "target",
  "lamp",
  "code",
  "search",
  "email",
  "contact",
  "upcoming",
  "gas",
  "chart",
  "telegram",
  "wallet",
  "forward"
] as const;

export type IconName = typeof svgIconsNames[number];
