import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cx("container-wide", className)} {...props}>
      {children}
    </Component>
  );
}

export function Section<T extends ElementType = "section">({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || "section";
  return (
    <Component className={cx("section", className)} {...props}>
      {children}
    </Component>
  );
}

export function Stack<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cx("stack", className)} {...props}>
      {children}
    </Component>
  );
}

export function Grid<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cx("responsive-grid", className)} {...props}>
      {children}
    </Component>
  );
}

export function Card<T extends ElementType = "article">({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || "article";
  return (
    <Component className={cx("card", className)} {...props}>
      {children}
    </Component>
  );
}

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return <span className={cx("badge", className)} {...props} />;
}
