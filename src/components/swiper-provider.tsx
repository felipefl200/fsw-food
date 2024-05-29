"use client";

import ScrollContainer from "react-indiana-drag-scroll";
import { PropsWithChildren } from "react";

export function SwiperProvider({ children }: PropsWithChildren) {
  return (
    <ScrollContainer className="flex cursor-default gap-3 px-5 py-2">
      {children}
    </ScrollContainer>
  );
}
