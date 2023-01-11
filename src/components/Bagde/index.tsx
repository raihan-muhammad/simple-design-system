import { ReactNode } from "react";
import config from "./config";

type Props = {
  children: ReactNode;
  state: "success" | "warning" | "error";
  className?: string;
};

function Badge({ children, state, className }: Props) {
  const combineClassName = [
    "py-1 px-4 rounded-full inline-flex items-center",
    config?.state?.[state] || "",
    className || "",
  ];
  return <span className={combineClassName.join(" ")}>{children}</span>;
}

export default Badge;
