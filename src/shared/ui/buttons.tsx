import type { FC, ReactNode } from "react";

type ButtonsProps = {
  children: ReactNode;
};

export const Buttons: FC<ButtonsProps> = (props) => {
  const { children } = props;

  return <button>{children}</button>;
};
