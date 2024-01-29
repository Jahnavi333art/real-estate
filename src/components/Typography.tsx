import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TypographyProps = {
  children?: ReactNode;
  className?: string;
};

export const TypographyH1 = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const TypographyH2 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const TypographyH3 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const TypographyH4 = ({ children, className }: TypographyProps) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const TypographyP = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
};

export const TypographyLead = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  );
};

export type TypographyListItemType = {
  value: string;
};

export const TypographyList = ({
  items,
  className,
}: {
  items: TypographyListItemType[];
  className?: string;
}) => {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {items.map((item, idx) => (
        <li key={item.value + idx}>{item.value}</li>
      ))}
    </ul>
  );
};

export const TypographyLarge = ({ children, className }: TypographyProps) => {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
};

export const TypographySmall = ({ children, className }: TypographyProps) => {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
};

export const TypographyMuted = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
};
