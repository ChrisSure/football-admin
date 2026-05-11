import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import {
  scrollAreaViewportClassName,
  scrollAreaScrollbarClassName,
  scrollAreaThumbClassName,
} from "./constants/scroll-area.constants.ts";
import type { ScrollAreaProps } from "./types/scroll-area.types.ts";

const ScrollArea = ({ children, className }: ScrollAreaProps) => {
  return (
    <BaseScrollArea.Root className={className}>
      <BaseScrollArea.Viewport className={scrollAreaViewportClassName}>
        {children}
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar className={scrollAreaScrollbarClassName}>
        <BaseScrollArea.Thumb className={scrollAreaThumbClassName} />
      </BaseScrollArea.Scrollbar>
    </BaseScrollArea.Root>
  );
};

export default ScrollArea;
export type { ScrollAreaProps } from "./types/scroll-area.types.ts";
