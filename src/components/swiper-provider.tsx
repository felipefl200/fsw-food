"use client";

import ScrollContainer from "react-indiana-drag-scroll";
import { PropsWithChildren } from "react";

export function SwiperProvider({ children }: PropsWithChildren) {
  return <ScrollContainer className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">{children}</ScrollContainer>;
}
