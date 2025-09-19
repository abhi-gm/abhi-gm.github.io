import React from "react";
import "./Button.css";

export default function Button({
  text,
  className = "",
  href,
  newTab,
  theme,
  variant = "solid",
}) {
  const resolvedVariant = variant === "outline" ? "outline" : "solid";
  const highlight = theme.highlight;
  const dark = theme.dark || "#050505";
  const glowShadow = theme.glow || "rgba(250, 204, 21, 0.35)";

  const style = {
    color: resolvedVariant === "outline" ? highlight : dark,
    backgroundColor: resolvedVariant === "outline" ? "transparent" : highlight,
    border: `1px solid ${highlight}`,
    boxShadow:
      resolvedVariant === "outline"
        ? "0 0 0 rgba(0, 0, 0, 0)"
        : `0 18px 45px ${glowShadow}`,
    "--btn-highlight": highlight,
    "--btn-hover-shadow":
      resolvedVariant === "outline"
        ? `0 20px 40px ${glowShadow}`
        : `0 24px 55px ${glowShadow}`,
    "--btn-hover-text": resolvedVariant === "outline" ? dark : dark,
  };

  const wrapperClassName = className ? `button-wrapper ${className}` : "button-wrapper";

  return (
    <div className={wrapperClassName}>
      <a
        className="main-button"
        data-variant={resolvedVariant}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
        style={style}
      >
        {text}
      </a>
    </div>
  );
}
