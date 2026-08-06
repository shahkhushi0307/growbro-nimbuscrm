import type { AnchorHTMLAttributes, ReactNode } from "react";

export function ArrowIcon({
  size = 18,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M9 3L7.9425 4.0575L12.1275 8.25H2V9.75H12.1275L7.9425 13.9425L9 15L15 9L9 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Variant = "dark" | "emerald" | "outline" | "white" | "white-outline";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  small?: boolean;
  full?: boolean;
  children: ReactNode;
};

export default function Button({
  href,
  variant = "dark",
  small,
  full,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    "btn",
    variant !== "dark" ? `btn--${variant}` : "",
    small ? "btn--small" : "",
    full ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes} {...rest}>
      <span>{children}</span>
      <span className="btn-arrow" aria-hidden>
        <ArrowIcon />
      </span>
    </a>
  );
}
