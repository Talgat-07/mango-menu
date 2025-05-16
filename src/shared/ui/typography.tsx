import type { FC, ReactNode } from "react";

const Tags = {
  body: "p",
  title: "h1",
  subtitle: "h2",
} as const;

type TagsType = typeof Tags;
type TypographyProps = {
  children: ReactNode;
  variant: keyof TagsType;
};

export const Typography: FC<TypographyProps> = (props) => {
  const { children, variant } = props;

  const TagName = Tags[variant in Tags ? variant : "body"];

  return <TagName>{children}</TagName>;
};
