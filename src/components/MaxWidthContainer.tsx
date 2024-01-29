import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MaxWidthContainerProps = {
  className?: string;
  children: ReactNode;
};

const MaxWidthContainer = ({ className, children }: MaxWidthContainerProps) => {
  return (
    <div className={cn("px-2.5 sm:px-20 mx-auto max-w-screen-xl", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
