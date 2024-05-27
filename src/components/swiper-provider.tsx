"use client";

import ScrollContainer from "react-indiana-drag-scroll";
import { PropsWithChildren } from "react";

export function SwiperProvider({ children }: PropsWithChildren) {
  return (
    <ScrollContainer className="flex gap-3 py-2 px-5">{children}</ScrollContainer>
  );
}
